import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.html';
import './index.css';
import App from './App';

const options = [
	{ label: 'Fruit', value: 'fruit' },
	{ label: 'Vegetable', value: 'vegetable' },
	{ label: 'Meat', value: 'meat' },
];

// Define your options array
const options1 = ['Option 1', 'Option 2', 'Option 3'];

// Get references to the HTML elements
const dropdownButton = document.getElementById('dropdownButton');
const dropdownList = document.getElementById('dropdownList');

// Variable to track dropdown open/close state
let isOpen = false;

// Function to toggle dropdown visibility
function toggleDropdown() {
	isOpen = !isOpen;
	dropdownList.style.display = isOpen ? 'block' : 'none';
}

// Function to handle option selection
function handleOptionClick(option) {
	dropdownButton.textContent = option;
	toggleDropdown();
}

// Create and append options to the dropdown list
options.forEach(option => {
	const li = document.createElement('li');
	li.textContent = option;
	li.className = 'dropdown-item';
	li.addEventListener('click', () => handleOptionClick(option));
	dropdownList.appendChild(li);
});

// Add click event to the button to toggle dropdown
dropdownButton.addEventListener('click', toggleDropdown);

// // const form = document.getElementById('form');
// // const name = document.getElementById('name');
// // const email = document.getElementById('email');
// // const website = document.getElementById('website');
// // const comment = document.getElementById('comment');

// // form.addEventListener('submit', e => {

// // });

// // Get all dropdowns from document
// const dropdowns = document.querySelectorAll('.dropdown');

// // Loop through all dropdown elements
// dropdowns.forEach(dropdowns => {
// 	// Get inner elements from each dropdown
// 	const select = dropdown.querySelector('.select');
// 	const caret = dropdown.querySelector('.caret');
// 	const menu = dropdowns.querySelector('.menu li');
// 	const options = drop.querySelectorAll('.menu li');
// 	const selected = dropdown.querySelector('.selected');
// })

// // Add click event to select element
// form.addEventListener('submit', e => {
// 	// Add the clicked select style to the select element
// 	select.classList.toggle('select-clicked');
// 	// Add
// }