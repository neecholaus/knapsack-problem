import {items, maxWeight} from './problem';

// sort by val desc
items.sort((a, b) => {
    if (a.val > b.val)
        return -1;

    if (a.val < b.val)
        return 1

    if (a.val === b.val)
        return 0;
});

const knapsack = {
    items: [],
    val: 0,
    w: 0
};

let noMoreTries = false;

// while we can hold more weight
while (knapsack.w < maxWeight || noMoreTries) {
    // find highest value item not already held
    const bestItem = items.reduce((acc, next) => {
        // skip if in knapsack already
        // console.log(knapsack.items.map(x => x.id));
        if (knapsack.items.map(x => x.id).indexOf(next.id) >= 0) {
            return acc;
        }

        if ((next.val > acc.val) && (next.w <= (maxWeight - knapsack.w))) {
            return next;
        }

        // if same val, only return next if it's lighter
        if ((next.val === acc.val) && (next.w < acc.w)) {
            return next;
        }

        return acc;
    }, {val: 0, w: 0});

    // if we can't fit any more items
    if (bestItem.val == 0 && bestItem.w == 0) {
        noMoreTries = true;
        break;
    }

    // add item to knapsack
    knapsack.items.push(bestItem);
    knapsack.val += bestItem.val;
    knapsack.w += bestItem.w;
}

console.log(knapsack);