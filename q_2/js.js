
function addingArrays(){
    let arr = []
    for(let i = 0; i < arguments.length; i++){
        arr = [...arr,arguments[i]];
    }
    return arr
}



let arr1 = [1,1,1,1];
let arr2 = [2,2,2,2];
let arr3 = [3,3,3,3]

document.write(addingArrays(arr1,arr2,arr3))