function capitalizeWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }

let array = ['daniel','morcos','smoke','tow','joints']
document.write(  capitalizeWords(array))