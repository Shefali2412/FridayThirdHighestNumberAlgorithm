// 3rd Highest Number in Array
// Algorithm:
// I/O: array of numbers
// O/P: number - 3rd highest number
// steps:
// 1. make a function thirdHighest & pass input 
// 1a. inside function make & initialize three variables first, second, and third to 0
// 1b. use for loop to iterate through an array to compare compare the current element in the array   
// 1c. inside for use if/else 
//          if the current element is greater than first, 
//                then update third with the value of second, second with the value of first, and first with the current element.
//           If the current element is greater than second but not greater than first, 
//                then update third with the value of second and second with the current element.
//           If the current element is greater than third but not greater than second, 
//                 then update third with the current element.
//  1d. Continue this process for all elements in the array.
//  1e. return third 
// call function & print 3rd max number


function thirdHighest (input){
    var first =0;
    var second =0;
    var third=0;

    for(var i =0; i<input.length; i++){
        if(input[i] > first){
            third = second;
            second = first;
            first = input[i];
        } else if(input[i] > second){
            third = second;
            second = input[i];
        } else if(input[i] > third){
            third = input[i];
        }
    }
    return third;
}

console.log(thirdHighest([2,5,3,1,4])); // output : 3