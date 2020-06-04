const squareList = (arr) => {
    // Only change code below this line
    return arr
        .filter(item => {
            if (Number.isInteger(item) && item > 0) {
                return item;
            }
        })
        .map(oitem => oitem * oitem)
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
