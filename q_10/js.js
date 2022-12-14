function longtext(arr) {
return arr.filter((e)=>{
  console.log(e.length)
  return e.length >= 6
})
  }

let array = ['daniel','morcos','smoke','tow','joints']
document.write(  longtext(array))