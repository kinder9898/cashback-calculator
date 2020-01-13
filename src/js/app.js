const REGULAR_CATEGORY = 'regular';
const INCREASED_CATEGORY = 'increased';
const SPECIAL_CATEGORY = 'special';

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;


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

for (const purchase of purchases) {
    elem = purchase;
    switch (elem.category) {
        case REGULAR_CATEGORY:
            cashback += regularPercent * elem.amount
            break;
        case INCREASED_CATEGORY:
            cashback += increasedPercent * elem.amount 
            break;
        case SPECIAL_CATEGORY:
            cashback += specialPercent * elem.amount
        default:
            break;

    }
}
const cashbackLimit=3000;
if (cashback > cashbackLimit){
    cashback = cashbackLimit;
}
    
console.log(cashback);