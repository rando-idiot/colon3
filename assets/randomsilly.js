
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
const sillyset = [
    ";3" = 1,
    ":3" = 2,
    ":4" = 3,
    ">:3" = 4,
    "<:3" = 5,
    ":33" = 6,
    ":3c" = 7,
]
var randomnumber = getRandomArbitrary(1, 7)
if (randomnumber === 1) {
    var setsil = ";3"
}
else if (randomnumber === 2) {
    var setsil = ":3"
}
else if (randomnumber === 3) {
    var setsil = ":4"
}
else if (randomnumber === 4) {
    var setsil = ">:3"
}
else if (randomnumber === 5) {
    var setsil = "<:3"
}
else if (randomnumber === 6) {
    var setsil = ":33"
}
else if (randomnumber === 7) {
    var setsil = ":3c"
}
document.getElementById("silly").innerHTML=setsil;
console.log(randomnumber)
console.log(sillyset)
console.log(setsil)
console.log(document.getElementById(silly))