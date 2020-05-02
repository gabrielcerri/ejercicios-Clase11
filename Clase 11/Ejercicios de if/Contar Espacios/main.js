String.prototype.espaciosEnBlanco = function() {
    return this.split(" ").length - 1
}

var x = "El jardin de los senderos que se bifurcan";
var length = x.espaciosEnBlanco();

console.log(length)