//a merge sort algorithm I wrote to demonstrate its capability for the visualizer.
export function mergeSort(array, l, r) {
    //base case: the segment is length 1
    if(l == r) return;
    var mid = Math.floor((l+r)/2);
    //otherwise, sort the left and right segments
    mergeSort(array, l, mid); mergeSort(array, mid+1, r);
    //combine sorted segments
    const lft = [], rit = []; 
    for (var i = l; i <= mid; i++) lft.push(array[i]); lft.push(Number.MAX_SAFE_INTEGER);
    for (var i = mid + 1; i <= r; i++) rit.push(array[i]); rit.push(Number.MAX_SAFE_INTEGER);
    for (var i = l, x=0, y=0; i <= r; i++)
    {
        if (lft[x] <= rit[y]) array[i] = lft[x++];
        else array[i] = rit[y++];
    }
}