function random_num(array){
let random = Math.floor(Math.random() * array.length);
return array[random]
}

let array = [3,5,5,5,5,5,2,4,8]
document.write(random_num(array))