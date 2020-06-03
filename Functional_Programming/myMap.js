// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach(a => newArray.push(callback(a)));
    // Add your code above this line
    return newArray;

};

var new_s = s.myMap(function (item) {
    return item * 2;
});
