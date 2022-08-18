function diverone (content){
    let temp = document.createElement('div')
    temp.innerHTML = content;
    return temp;
  }

function oneLoader (){
const divOne = document.createElement('div')
divOne.appendChild(diverone('<h1>Welcome To Alberts Tavern</h1>'));
divOne.appendChild(diverone('Some text Here'));
divOne.appendChild(diverone('Other text here'));
return divOne;
}
export default oneLoader;