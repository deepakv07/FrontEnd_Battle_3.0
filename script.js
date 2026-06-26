document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================================
    // FEATURE 1: MULTI-DIMENSIONAL PRICING ENGINE
    // ========================================================
    
    // The strict configuration object
    const pricingMatrix = {
        discountMultiplier: 0.8, // 20% Off
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

    const currencySelect = document.getElementById('currency-select');
    const billingToggle = document.getElementById('billing-toggle');
    const domNodes = {
        starter: document.getElementById('price-starter'),
        pro: document.getElementById('price-pro'),
        enterprise: document.getElementById('price-enterprise')
    };

    // State Reflow Guardrail: Directly mutates text nodes ONLY.
    function updatePrices() {
        const currency = currencySelect.value;
        const isAnnual = billingToggle.checked;
        
        const regionData = pricingMatrix.tariffs[currency];
        const billingMod = isAnnual ? pricingMatrix.discountMultiplier : 1;

        for (const tier in domNodes) {
            const base = pricingMatrix.tiers[tier].baseRate;
            // Calculate and format final float
            const finalPrice = (base * regionData.rate * billingMod).toFixed(0); 
            
            // STRICT ISOLATION: Only update localized text, no parent re-renders
            domNodes[tier].innerText = `${regionData.symbol}${finalPrice}`;
        }
    }

    currencySelect.addEventListener('change', updatePrices);
    billingToggle.addEventListener('change', updatePrices);
    
    // Initialize prices on load
    updatePrices();


    // ========================================================
    // FEATURE 2: BENTO-TO-ACCORDION CONTEXT LOCK
    // ========================================================
    
    const bentoNodes = document.querySelectorAll('.bento-node');
    let activeDesktopIndex = -1;
    let isMobile = window.innerWidth < 768;

    bentoNodes.forEach((node) => {
        const index = parseInt(node.getAttribute('data-index'));

        // Track Desktop Hover Context
        node.addEventListener('mouseenter', () => {
            if (!isMobile) activeDesktopIndex = index;
        });
        
        node.addEventListener('mouseleave', () => {
            if (!isMobile) activeDesktopIndex = -1;
        });

        // Mobile Accordion Click Logic
        node.querySelector('.bento-header').addEventListener('click', () => {
            if (isMobile) {
                // Close others, open clicked
                bentoNodes.forEach(n => {
                    if (n !== node) n.classList.remove('accordion-active');
                });
                node.classList.toggle('accordion-active');
            }
        });
    });

    // The Window Resize Guardian
    window.addEventListener('resize', () => {
        const currentlyMobile = window.innerWidth < 768;
        
        if (currentlyMobile !== isMobile) {
            isMobile = currentlyMobile;
            
            if (isMobile) {
                // Resize Desktop -> Mobile: Transfer exact context state
                bentoNodes.forEach(n => n.classList.remove('accordion-active'));
                
                if (activeDesktopIndex !== -1) {
                    const targetNode = document.querySelector(`.bento-node[data-index="${activeDesktopIndex}"]`);
                    if (targetNode) targetNode.classList.add('accordion-active');
                }
            } else {
                // Resize Mobile -> Desktop: Reset styles
                bentoNodes.forEach(n => n.classList.remove('accordion-active'));
            }
        }
    });

});
