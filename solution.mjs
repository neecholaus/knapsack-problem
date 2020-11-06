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

// iterate through each from start, adding val and weight
    // once max weight is reached / exceeded
        // if max weight == accumulated weight
            // since we started from highest vals, we have a winner, return list of itemsa
        // otherwise weight is higher than allowed
            // remove current item
            // store list of items as potential candidate, move on to next item
