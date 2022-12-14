const check = (list) => {
    const setItem = new Set(list);
    return setItem.size <= 1;
 }


let arr_str = ['a','a','a','a','a'];
let arr_str2 = ['a','3','a','a','a'];

document.write(check(arr_str2))