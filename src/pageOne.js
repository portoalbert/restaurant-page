function diverone (content){
    let temp = document.createElement('div')
    temp.innerHTML = content;
    return temp;
  }

function oneLoader (){
const divOne = document.createElement('div')
divOne.appendChild(diverone('<h1>Welcome To Alberts Tavern</h1>'));
divOne.appendChild(diverone('he atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.'));
divOne.appendChild(diverone('he atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.'));
return divOne;
}
export default oneLoader;