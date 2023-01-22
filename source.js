const button = document.querySelector('#callFtion');
const divEle = document.querySelector('div');
const uList = document.createElement('ul');
divEle.appendChild(uList);
button.addEventListener('click' ,() => {
    const input = document.querySelector('input');
    const userInput = input.value;
    input.value = '';
    input.focus();
    const listItem  = document.createElement('li');
    const spanElm = document.createElement('span');
    spanElm.textContent = userInput;
    const newButton = document.createElement('button');
    newButton.textContent = 'Delete';
    newButton.addEventListener('click', () => uList.removeChild(listItem));
    uList.appendChild(listItem);
    listItem.appendChild(spanElm);
    listItem.appendChild(newButton);
   
    


} )