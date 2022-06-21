//Calculating sum of numbers within an array

const arr = [1,2,-3,-4,5,-6,7,8,9,10];

const sumofArray = ()=>{
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumofArray());

// Alternative Method

const main = arr.reduce((acc,curr)=>{
   return acc = acc+ curr;
});

console.log(main);