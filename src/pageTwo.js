function divertwo (content){
    let temp = document.createElement('div')
    temp.innerHTML = content;
    return temp;
  }

function twoLoader (){
const divOne = document.createElement('div')
divOne.appendChild(divertwo('<h1>Menu</h1>'));
divOne.appendChild(divertwo('Theres not much but theres this'));
divOne.appendChild(divertwo('Yay Jose'));
return divOne;
}
export default twoLoader;