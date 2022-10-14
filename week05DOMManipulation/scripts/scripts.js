const inputRef = document.querySelector('input');
const buttonRef = document.querySelector('button');
const listRef = document.querySelector('ul');

buttonRef.addEventListener('click', () => {
    
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const userText = inputRef.value;
    const delButton = document.createElement('button');
    
    listItem.appendChild(listText);
    listText.textContent = userText;
    
    listItem.appendChild(delButton);
    delButton.textContent = '❌';
    
    listRef.appendChild(listItem);
    
    delButton.addEventListener('click', () => {
        listRef.removeChild(listItem);
    });
    
    input.value = ''; 
    input.focus();

});