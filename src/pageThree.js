function divertwo (content){
    let temp = document.createElement('div')
    temp.innerHTML = content;
    return temp;
  }

function threeLoader (){
const divOne = document.createElement('div')
divOne.appendChild(divertwo('<h1>Contact</h1>'));
divOne.appendChild(divertwo('Dont contact me man'));
divOne.appendChild(divertwo('Call someone else'));
return divOne;
}
export default threeLoader;