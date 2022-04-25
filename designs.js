// Defining variables by selecting the DOM elements that the user will interact with.

// Select size input
const sizePicker = document.getElementById('sizePicker');
// Value of height chosen
const inputHeight = document.getElementById('inputHeight');
// Value of width chosen
const inputWidth = document.getElementById('inputWidth');
// Select color input
const colorPicker = document.getElementById('colorPicker');
// The table element variable
const fullTable = document.getElementById('pixelCanvas');

// Add an event listener when form gets submitted.
sizePicker.addEventListener('submit', function (event) {
    //Prevent the default HTML submit behaviour from happening.
    event.preventDefault();
    // Call validateForm function.
    validateForm();
}, false);

// Prevent the user from inputting too high values...
// this will prevent browser's page from crashing.
function validateForm() {
    // An if statement to check if input value is greater than 100.
    if ((inputHeight.value > 100) || (inputWidth.value > 100)) {
        // To show an alert if the user's grid height or width value is...
        // greater than 100.
        alert("Your height and width value must not be greater than 100");
        return false;
    } else {
        // Call the makeGrid function if the user inputs the correct value.
        makeGrid();
    }
}

// After size has been submitted and the user values validated...
// makeGrid() is called.
function makeGrid() {
    // Clear the color from the grid squares when the user re-submits a...
    // new height and width value.
    while (fullTable.hasChildNodes()) {
        fullTable.removeChild(fullTable.lastChild);
    }

    //Create an _N_by_M_ grid, based on the user input using a for loop.
    for (let row = 0; row < inputHeight.value; row++) {
        // Loop through the number of height specified and create the "tr"...
        // element accordingly storing it in a tableRow variable.
        let tableRow = document.createElement('tr');

        // Add or append a tableRow to the table element(fullTable variable)...
        // for each row.
        fullTable.appendChild(tableRow);

        // Loop through the number of width specified.
        for (let column = 0; column < inputWidth.value; column++) {

            // Creates a "td" element for each loop according to the number...
            // specified which is stored in the tableData variable.
            let tableData = document.createElement('td');

            // Append every new "tableData" for each loop as a last child...
            // to the fullTable(table element). (Stacking them upon each other).
            fullTable.lastChild.appendChild(tableData);
        }
    }

    // Create new instances of td /select all td elements.
    let tableCells = Array.from(document.querySelectorAll('td'));
    // Add an event listener that sets the background color of the cell to...
    // the user selected color.
    tableCells.forEach(function (event) {
        event.addEventListener('click', function () {

            // Use an if statement to check if the cell is colored or not.
            // (This is used to toggle on and off a cell, while drawing).
            if (this.style.backgroundColor === '') {
                // Change the color of the cell to that of...
                // the user selected color when clicked.
                this.style.backgroundColor = colorPicker.value;
            } else {
                // Remove the color from the colored cell when clicked.
                this.style.backgroundColor = null;
            }
        }, false);
    });
}