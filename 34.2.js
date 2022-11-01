var prodID = "LD1493";
var price = 1700;
var discount = 15;
var prod1 = new Product(prodID, price);
console.log(prod1.prodID + " price: " + prod1.price);
prod1.changePrice(discount);
console.log(prod1.prodID + " new price: " + prod1.price);

function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;
  this.changePrice = function (discount) {
    //your code goes here
    this.price = price - (discount / 100) * price;
  };
}
 13  
36.1.js