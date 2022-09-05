'use strict'
const li = document.querySelectorAll('li')
for (const liElement of li) {
    console.log(liElement)
}
const ulAttributes = document.querySelector('ul').attributes;
const arrayOfAttributesValue = [];
const arrayOfAttributes = [];
for (const item of ulAttributes) {
    arrayOfAttributesValue.push(item.value)
    arrayOfAttributes.push(item)
}
console.log(arrayOfAttributesValue)
console.log(arrayOfAttributes)
li[li.length - 1].innerText = 'Привет, меня зовут Аркадий'
li[0].setAttribute('data-my-name', 'Arkadii')
document.querySelector('ul').removeAttribute('data-dog-tail')


