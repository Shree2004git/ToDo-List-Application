let submit = document.getElementById('submit');
let addtask = document.getElementById('addtask');
let todoList = document.getElementById('todoList');
let doneList = document.getElementById('doneList');

let arr = [];

submit.addEventListener('click', () => {

    if (addtask.value !== '') {

        arr.push(addtask.value);

        todoList.innerHTML +=
            '<li id="' + (arr.length - 1) + '">' +
            '<button onclick="complete(' + (arr.length - 1) + ')">' +
            addtask.value +
            '</button></li>';

        addtask.value = '';
    }
});

function complete(id) {

    doneList.innerHTML += `<li>${arr[id]}</li>`;

    document.getElementById(id).style.display = "none";
}