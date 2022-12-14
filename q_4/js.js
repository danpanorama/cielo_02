function stringarr(x){
    let string = ""
    for(let i = 0; i < x.length; i++){
        string += x[i];
    }
    return string
}


let arr_str = ['a','b','c','d','e'];

document.write(stringarr(arr_str))