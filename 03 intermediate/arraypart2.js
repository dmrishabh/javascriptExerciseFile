var   isEven = (element) => {
    // function isEven(element){
    // if (element%2==0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

// console.log(isEven(5));

var result = [2,3,4,5,6,8,7,9].every((e) => (e%2===0));
console.log(result);