let data = [
    {id: 1, tache: 'Tâche 1', description: 'Tâche 1'},
    {id: 2, tache: 'Tâche 2', description: 'Tâche 2'},
    {id: 3, tache: 'Tâche 3', description: 'Tâche 3'},
    {id: 4, tache: 'Tâche 4', description: 'Tâche 4'},
    {id: 5, tache: 'Tâche 5', description: 'Tâche 5'},
    {id: 6, tache: 'Tâche 6', description: 'Tâche 6'},
];

const table = document.querySelector('table');

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const tr = document.createElement('tr');
    tr.id = `indexTache${i}`;

    const td1 = document.createElement('td');
    td1.textContent = element.tache;

    tr.appendChild(td1);

    const td2 = document.createElement('td');
    
    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.classList.add('btn', 'btn-success', 'btn-sm');
    button1.id = `put${i}`;
    button1.textContent = "Put";

    const icon1 = document.createElement('i');
    icon1.classList.add('fas', 'fa-check');
    button1.appendChild(icon1);
    td2.appendChild(button1);

    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.classList.add('btn', 'btn-danger', 'btn-sm');
    button2.id = `Delete${element.id}`;
    button2.textContent = "Delete";

    button2.addEventListener('click', () => {
        td1.style.display = "none";
        td2.style.display = "none";
    })

    const icon2 = document.createElement('i');
    icon2.classList.add('fas', 'fa-trash');
    

    button2.appendChild(icon2);
    td2.appendChild(button2);

    tr.appendChild(td2);

    table.appendChild(tr);
}


const taskName = document.getElementById('taskName');
const taskDescription = document.getElementById('taskDescription');
const addTask = document.getElementById('addTask');
addTask.disabled = true;


taskName.addEventListener('input', toggleTask);
taskDescription.addEventListener('input', toggleTask);

function toggleTask() {
    if (taskName.value && taskDescription.value) {
        addTask.disabled = false;
    } else {
        addTask.disabled = true;
    }
}

addTask.addEventListener('click', () => {
    data.push({ tache: taskName.value, description: taskDescription.value })

        const tr = document.createElement('tr');
        tr.id = `indexTache${data.length + 1}`;

        const td1 = document.createElement('td');
        td1.textContent = taskName.value;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        const button1 = document.createElement('button');
        button1.type = 'button';
        button1.id = `put${data.length + 1}`;
        button1.textContent = "Put";
        button1.classList.add('btn', 'btn-success', 'btn-sm');

        const icon1 = document.createElement('i');
        icon1.classList.add('fas', 'fa-check');
        button1.appendChild(icon1);
        td2.appendChild(button1);

        const button2 = document.createElement('button');
        button2.type = 'button';
        button2.classList.add('btn', 'btn-danger', 'btn-sm');
        button2.id = `delete${data.length + 1}`;
        button2.textContent= "Delete";
        const icon2 = document.createElement('i');
        icon2.classList.add('fas', 'fa-trash');
        button2.appendChild(icon2);
        td2.appendChild(button2);

        tr.appendChild(td2);

        table.appendChild(tr);

});

