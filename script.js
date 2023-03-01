// $(document).ready(function(){
//   const task = localStorage.getItem('task');
//   if(task){
//     $('#js-display-text').text(task);
//   }
//   $('#js-add-Button').click(function(){
//     const taskName = $('#js-input-Field').val();
//     const taskElement = $('<span></span>').text(taskName).addClass('task');
//     $('#js-display-text').append(taskElement);
//     localStorage.setItem('task', taskName);
//     $('#input__Field').val('');
//   })
// })
const addButton = document.getElementById('js-add-Button');
const inputField = document.getElementById('js-input-Field');
const displayText = document.getElementById('js-display-text');
const tasksList = document.getElementById('js-tasks-list');

addButton.addEventListener('click', function(e) {
  e.preventDefault()
  const newTask = document.createElement('div');
  const taskText = document.createElement('span');
  const deleteButton = document.createElement('button');
  const deleteIcon = document.createElement('img');
  
  // Nastavíme text úkolu
  taskText.innerText = inputField.value;
  newTask.appendChild(taskText).style.width = "420px";
  newTask.appendChild(taskText).style.height = "50px";
  newTask.appendChild(taskText).style.justifyContent = "center";
  newTask.appendChild(taskText).style.alignItems = "center";
  newTask.appendChild(taskText).style.textAlign = "center";
  newTask.appendChild(taskText).style.background = "green";
  
  // Nastavíme ikonu pro smazání úkolu
  deleteIcon.src = './img/trash.svg';
  deleteIcon.style.background = "#E75D5D";
  deleteIcon.style.width = "66px";
  deleteIcon.style.height = "50px";
  deleteIcon.style.border = "none";
  deleteIcon.style.padding = "10px";
  deleteIcon.style.borderRadius = "8px";

  deleteButton.appendChild(deleteIcon);
  newTask.appendChild(deleteButton);
  
  // Přidáme nový prvek seznamu
  tasksList.appendChild(newTask);
  
  // Aktualizujeme text na obrazovce
  displayText.innerText = 'Seznam úkolů:';
  
  // Vyčistíme pole pro vstup
  inputField.value = '';
  
  // Přidáme funkci pro smazání úkolu
  deleteButton.addEventListener('click', function() {
    tasksList.removeChild(newTask);
    
    // Pokud nejsou žádné úkoly, vrátíme původní text na obrazovce
    if (tasksList.children.length === 0) {
      displayText.innerText = 'Momentálně v úkolníčku, žádný úkol nemáte.';
    }
  });
});