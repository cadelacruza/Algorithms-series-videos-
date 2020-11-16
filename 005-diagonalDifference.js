function diagonalDifference(arr) {
    let rightLeft = 0;
    let leftRight = 0;

    for(let i = 0, j = arr.length - 1; i < arr.length; i++){
        leftRight += arr[i][i];
        rightLeft += arr[i][j];
        j--;
    }

    return Math.abs(rightLeft - leftRight);
}
