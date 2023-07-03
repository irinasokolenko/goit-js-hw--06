"use strict";

const categories = document.querySelectorAll(".item");
console.log('Namber of categories', categories.length);
console.log('')

categories.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements', element.firstElementChild.children.length)
    console.log('')
})
 