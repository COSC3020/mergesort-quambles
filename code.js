function merge(left, right)
{
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // The concat ensures leftover elements get added
    return result.concat(left.slice(i), right.slice(j));
}

function mergesort(array) {

    for (let subSize = 1; subSize < array.length; subSize *= 2)
    {
        for (let start = 0; start < array.length; start += 2 * subSize)
        {
            // Decides the indices for the subarray sizes, defaults to n if too big
            let mid = Math.min(start + subSize, array.length);
            let end = Math.min(start + 2 * subSize, array.length);

            // Makes two subarrays to merge
            let left = array.slice(start, mid);
            let right = array.slice(mid, end);

            // Merges the two subarrays then uses spread operator to replace values
            let merged = merge(left, right);
            array.splice(start, merged.length, ...merged);
        }
    }

    return array;
}
