//lesson 24.1
/*
var manusia ={
    name: "Nanda", 
    age: 18,
   favcolor: "Blue", 
   height: 174,
};
console.log(manusia.name)
*/

//lesson 25.1
/*
var course = {name: "bermain", chapter:1}
console.log(course.name.length)
*/

//lesson 26.1
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

//lesson 27.1
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

//36.1
