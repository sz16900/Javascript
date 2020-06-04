// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
    return title.trim().toLowerCase().split(/\W+/).join("-");
}
// Only change code above this line

urlSlug(globalTitle)