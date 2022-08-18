import oneLoader from './pageOne';
import twoLoader from './pageTwo';
import threeLoader from './pageThree';
import './style.css';

const mainBody = document.getElementById('content');
const createDiv = document.createElement('div');
const createDivTwo = document.createElement('div');
createDiv.setAttribute('class','header');
createDivTwo.setAttribute('class','mainbody');
const headEle = document.getElementById('head');

function diver (content){
  let temp = document.createElement('div')
  temp.innerText = content;
  temp.setAttribute('id',content.toLowerCase())
  return temp;
}

function pageLoader () {
  createDiv.appendChild(diver('Home'));
  createDiv.appendChild(diver('Menu'));
  createDiv.appendChild(diver('Contact'));
  mainBody.appendChild(createDiv);
  document.getElementById('menu').addEventListener('click',changer)
  document.getElementById('contact').addEventListener('click',changertwo)
  document.getElementById('home').addEventListener('click',changerone)


}
pageLoader();
createDivTwo.appendChild(oneLoader());
mainBody.appendChild(createDivTwo);

function changer (){
  while (createDivTwo.firstChild) {
    createDivTwo.removeChild(createDivTwo.lastChild);
  }
  createDivTwo.appendChild(twoLoader());
}
//this needs to merge into one function
function changertwo (){
  while (createDivTwo.firstChild) {
    createDivTwo.removeChild(createDivTwo.lastChild);
  }
  createDivTwo.appendChild(threeLoader());
}
//this needs to merge into one function
function changerone (){
  while (createDivTwo.firstChild) {
    createDivTwo.removeChild(createDivTwo.lastChild);
  }
  createDivTwo.appendChild(oneLoader());
}