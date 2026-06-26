export const pricingMatrix = {
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

export type Currency = keyof typeof pricingMatrix.tariffs;
export type Tier = keyof typeof pricingMatrix.tiers;
