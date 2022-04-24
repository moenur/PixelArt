// Select color input
// Select size input

let color = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');
let form = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    table.innerHTML = '';
    makeGrid();
})

function makeGrid() {

    for (let t = 0; t < height.value; t++) {
        const tableRaw = table.insertRow(0);
        for (let f = 0; f < width.value; f++) {
            let pixelCell = tableRaw.insertCell(0);
            pixelCell.addEventListener('click', cellColor)
        }
    }
}

function cellColor(e) {
    let cell = e.target.style.backgroundColor
    if (cell === '') {
        e.target.style.backgroundColor = colorPicker.value;
    } else {
        e.target.style.backgroundColor = '';
    }

}