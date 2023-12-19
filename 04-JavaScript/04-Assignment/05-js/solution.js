

function factorial(value){
    if(value == 0)
    {
        return 1;
    }
    return factorial(value-1) * value;
}

console.log(factorial(5));

console.log(factorial(3));

console.log(factorial(10));