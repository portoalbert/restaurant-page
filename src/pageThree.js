function divertwo (content){
    let temp = document.createElement('div')
    temp.innerHTML = content;
    return temp;
  }

function threeLoader (){
const divOne = document.createElement('div')
divOne.appendChild(divertwo('<h1>Third PAge</h1>'));
divOne.appendChild(divertwo('Hallelujah'));
divOne.appendChild(divertwo('OMG'));
return divOne;
}
export default threeLoader;