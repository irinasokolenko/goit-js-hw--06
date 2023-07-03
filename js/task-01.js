"use strict";

const categoriesRef = document.querySelector("#categories")
const itemCategoriesRef = document.querySelectorAll('.item')

console.log('Number of categories:', categoriesRef.children.length)

const el = itemCategoriesRef.forEach(elem => {
    console.log('Category:', elem.querySelector('h2').textContent)
    
    console.log('Elements:', elem.querySelector('ul').children.length);
})