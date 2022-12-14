function array_func(array){
return "first number is " + array[0] + 'last number is ' + array[array.length -1]
}

let array = [3,5,5,5,5,5,2,4,8]
document.write(array_func(array))