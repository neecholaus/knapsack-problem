// THIS WON'T WORK
// I'm calculating vals and weights in order, but it's possible
// that items from the middle can be added together to be the
// most efficiently packed knapsack.

import {items, maxWeight} from './problem';

// sort by val desc
// no spaceship operator :(
items.sort((a, b) => {
    if (a.val > b.val)
        return -1;

    if (a.val < b.val)
        return 1

    if (a.val === b.val)
        return 0;
});

// holder for knapsack possibilities
// array of {items: array, val: int, w: int}
let theoreticalKnapsacks = [];

// iterate through each item
items.forEach(startingItem => {
    // initialize current theory
    let currentTheoreticalKnapsack = {...startingItem};
    delete currentTheoreticalKnapsack.id;
    currentTheoreticalKnapsack.items = [startingItem];

    // iterate through every item adding val and weight
    items.every(item => {
        // skip our theories starting item that we did not start with,
        if (item.id === startingItem.id)
            return true;

        // console.log(item.id);

        // add val and weight
        currentTheoreticalKnapsack.val += item.val;
        currentTheoreticalKnapsack.w += item.w;

        // once max weight is reached / exceeded
        // if max weight == accumulated weight
        // since we started from highest vals, we have a winner, return list of items
        // otherwise weight is higher than allowed
        // remove current item
        // store list of items as potential candidate, move on to next item
    });
});
