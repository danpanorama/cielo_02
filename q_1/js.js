
function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}
let arr = [1,1,1,1,1,1]
let answer =  sumArray(arr);
document.write(answer)



