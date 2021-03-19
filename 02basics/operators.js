// var  num1 = 2;
// var  num2 = 4;

// var ans = num1 > num2 ;

// console.log("Addition",num1 + num2);
// console.log("Sub",num1 - num2);
// console.log("Multiplication",num1 * num2);
// console.log("Division",num2 / num1);
// console.log(ans);

// D = ((L - S)/L) * 100

var sellingPrice;
var listingPrice;

sellingPrice = 199;
listingPrice = 799;

var discount = (listingPrice - sellingPrice);

var discountPercent = (discount / listingPrice) * 100;


displayDiscountPercentage = Math.round(discountPercent);

console.log("INR "+ sellingPrice +" "+ displayDiscountPercentage +"%  OFF");


var result = listingPrice > sellingPrice;
console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence



