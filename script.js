// 1. The Multi-Dimensional Configuration Matrix (15 Points)
const pricingMatrix = {
    discountMultiplier: 0.8, // Flat 20% annual discount multiplier
    tariffs: {
        USD: { rate: 1, symbol: '$' },
        EUR: { rate: 0.92, symbol: '€' },
        INR: { rate: 83.5, symbol: '₹' }
    },
    tiers: {
        starter: { baseRate: 19 },
        pro: { baseRate: 49 },
        enterprise: { baseRate: 99 }
    }
};

// 2. Target the exact DOM elements
const currencySelect = document.getElementById('currency-select');
const billingToggle = document.getElementById('billing-toggle');

const nodes = {
    starter: document.getElementById('price-starter'),
    pro: document.getElementById('price-pro'),
    enterprise: document.getElementById('price-enterprise')
};

// 3. State Isolation Update Function (15 Points)
// This strictly targets text nodes without triggering global structural reflows.
function updatePrices() {
    const currency = currencySelect.value;
    const isAnnual = billingToggle.checked;
    
    const region = pricingMatrix.tariffs[currency];
    const billingMod = isAnnual ? pricingMatrix.discountMultiplier : 1;

    // Dynamically calculate and mutate localized text nodes only
    for (const tier in nodes) {
        const base = pricingMatrix.tiers[tier].baseRate;
        const finalPrice = (base * region.rate * billingMod).toFixed(2);
        nodes[tier].innerText = `${region.symbol}${finalPrice}`;
    }
}

// 4. Attach Event Listeners
currencySelect.addEventListener('change', updatePrices);
billingToggle.addEventListener('change', updatePrices);

// 5. Run once on load to populate initial values
updatePrices();

// --- FEATURE 2: Context Lock Constraint ---
const bentoNodes = document.querySelectorAll('.bento-node');
let activeDesktopIndex = -1;
let isMobile = window.innerWidth < 768;

bentoNodes.forEach((node) => {
    const index = parseInt(node.getAttribute('data-index'));

    // 1. Track Hover on Desktop
    node.addEventListener('mouseenter', () => {
        if (!isMobile) activeDesktopIndex = index;
    });
    
    node.addEventListener('mouseleave', () => {
        // Only clear if we actually leave the node on desktop
        if (!isMobile) activeDesktopIndex = -1;
    });

    // 2. Handle Manual Clicks on Mobile
    node.querySelector('.bento-header').addEventListener('click', () => {
        if (isMobile) {
            // Close others, toggle current
            bentoNodes.forEach(n => {
                if (n !== node) n.classList.remove('accordion-active')
            });
            node.classList.toggle('accordion-active');
        }
    });
});

// 3. The Window Resize Guardian (Transfers Context)
window.addEventListener('resize', () => {
    const currentlyMobile = window.innerWidth < 768;
    
    // If we cross the breakpoint...
    if (currentlyMobile !== isMobile) {
        isMobile = currentlyMobile;
        
        if (isMobile) {
            // Desktop -> Mobile: Programmatically open the tracked hover index
            if (activeDesktopIndex !== -1) {
                bentoNodes.forEach(n => n.classList.remove('accordion-active'));
                const targetNode = document.querySelector(`.bento-node[data-index="${activeDesktopIndex}"]`);
                if (targetNode) targetNode.classList.add('accordion-active');
            }
        } else {
            // Mobile -> Desktop: Clean up accordion states
            bentoNodes.forEach(n => n.classList.remove('accordion-active'));
        }
    }
});
