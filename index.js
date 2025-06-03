

document.body.style.backgroundColor = 'light_ilver';


const title = document.getElementById('title');
title.style.color = 'green';


const headers = document.querySelectorAll('h3.produce-header');
headers.forEach(h3 => {
  h3.style.textTransform = 'uppercase';
});

const fruitList = document.getElementById('fruList');
const newFruit = document.createElement('li');
newFruit.innerHTML = `<i class="fa-solid fa-peach"></i> Peach`;
fruitList.appendChild(newFruit);

const vegList = document.getElementById('vegList');
const newVeg = document.createElement('li');
newVeg.innerHTML = `<i class="fa-solid fa-seedling"></i> Broccoli`;
vegList.appendChild(newVeg);

window.onload = () => {
  alert("Welcome to Greens Kiosk! Enjoy fresh, quality produce.");
};
