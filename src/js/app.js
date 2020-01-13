const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';

const purchases = [
    {
        amount: 1000,
        category: REGULAR_CATEGORY,
    },
    {
        amount: 10000,
        category: INCREASED_CATEGORY,
    },
    {
        amount: 1000,
        category: REGULAR_CATEGORY,
    },
    {
        amount: 1000,
        category: SPECIAL_CATEGORY,
    },
];
let cashback = 0;

for (let i = 0; i < purchases.length; i++) {
    const elem = purchases[i];
    switch (elem.category) {
        case REGULAR_CATEGORY:
            cashback += (1 * elem.amount) / 100
            break;
        case INCREASED_CATEGORY:
            cashback += (5 * elem.amount) / 100
            break;
        case SPECIAL_CATEGORY:
            cashback += (30 * elem.amount) / 100
        default:
            break;

    }
}
const cashbackLimit=3000;
if (cashback > cashbackLimit)
    cashback = cashbackLimit;
console.log(cashback);