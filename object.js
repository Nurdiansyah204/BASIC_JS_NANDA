//lesson 31.1
/*
var manusia ={
    name: "Nanda", 
    age: 18,
   favcolor: "Blue", 
   height: 174,
};
console.log(manusia.name)
*/

//lesson 32.1
/*
var course = {name: "bermain", chapter:1}
console.log(course.name.length)
*/

//lesson 33.1
//instance of object (new)
/*
function person(name, age, color){
    this.name = name;
    this.age = age;
    this.favcolor = color;
}
var p1 = new person("nanda",18,"green")
var p2 = new person("jhony",18,"blue")

console.log(p1.name+' dan '+p2.name+' ber Umur '+p1.age)
*/

//lesson 34.1
/*
function makan(status, food){
    this.status = status;
    this.food = food;
    this.changestatus = function (status){
        this.status = status;
    }
}
var p =new makan ("berdoa", "bakso");
p.changestatus("selesai")
console.log(p.status+" makan "+p.food)
*/

// function orang(color, age){
//     this.favcolor= color;
//     this.age= age;
//     this.changestatus = function(status){
//         this.status= status;
//     }
//     var p =new orang ("green", 18)
//     p.changestatus("orange", 19)
//     console.log(p.favcolor+" "+p.age)
// }

//  function bilangan(x, y){
//     this.x = x,
//     this.y = y,
//     this.jumlah = function jumlah(x, y){
//         c =  x + y;
//         return c;
//     }
//  }
//  var angka =new bilangan(3,1)
//  var b = angka.jumlah(angka.x,angka.y)
//  console.log(b);
 
 