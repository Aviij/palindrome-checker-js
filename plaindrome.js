
function reverseArray(inputArray){

    // new array to hold reversed array
 const reversedArray = [];
 
    //reverse by looping backwards 
   for( let i=inputArray.length-1; i >= 0;i--){
    reversedArray.push(inputArray[i]);// Push elements in reverse order

   }
   return reversedArray;

}

function splitArray(inputArray){
    //zwei arrays to hold each half
     const firstHalfArray=[];
     const secondHalfArray=[];
     

    //get the midpoint 
    const midpoint = Math.floor(inputArray.length/2);

    //loop through: get the indexes upto the midpoint
    for(let i =0; i < inputArray.length;i++) {

        if(i < midpoint){
             // if i is less than mid point push first half 
            firstHalfArray.push(inputArray[i]);
   
        }else{
            secondHalfArray.push(inputArray[i])

        }
    }

    return {
        firstHalfArray : firstHalfArray,
        secondHalfArray : secondHalfArray
    }

}


const lettersArray = ['s','l','f','f','l','s'];
const letterMissMatchedArray = ['s','l','f','f','l','s','o'];

const splitResults = splitArray(lettersArray); // get both halves into a variable 

const firstHalfArray = splitResults.firstHalfArray;
const secondHalfArray = splitResults.secondHalfArray;
const reversedSecondHalf  = reverseArray(secondHalfArray);// reversed second half is here 

function isPlaindrome(first, reverse){
    if(first.length !== reverse.length){
        console.log("not a plaindrome!");
        return;
    }

    for(let i=0; i < first.length; i++){
        if(first[i] != reverse[i]){
            console.log("nooooo");
            return;
        }
    }
    console.log("palindrome!");
}

isPlaindrome(firstHalfArray, reversedSecondHalf);





