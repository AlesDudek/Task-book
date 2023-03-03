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
const clearButton = document.getElementById('js-clear-button');
const taskCountElement = document.getElementById('js-task-count');
const lableInputText = document.getElementById('js-section-lable');
const counter = document.querySelector(".counter")

let count = 0;


addButton.addEventListener('click', function(e) {
  e.preventDefault()
  const newTask = document.createElement("div");
  const taskText = document.createElement("span");
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("img");
  

  lableInputText.style.display = "none";
  taskCountElement.style.display = "block";

  // Nastavíme text úkolu
  taskText.innerText = inputField.value;
  taskText.style.width = "484px";
  taskText.style.height = "50px";
  taskText.style.textAlign = "center";
  taskText.style.display = "flex";
  taskText.style.justifyContent = "center";
  taskText.style.alignItems = "center";
  taskText.style.background = "#b5b1b1";
  newTask.appendChild(taskText);
  newTask.style.display = "flex";
  newTask.style.marginTop = "10px";
  taskText.style.borderRadius = "8px 0 0 8px"
  clearButton.style.display = "block"
  
  
  // Nastavíme ikonu pro smazání úkolu
  deleteIcon.src = './img/trash.svg';
  deleteIcon.style.background = "#E75D5D";
  deleteIcon.style.width = "66px";
  deleteIcon.style.height = "50px";
  deleteIcon.style.border = "none";
  deleteIcon.style.padding = "10px";
  deleteIcon.style.borderRadius = "0 8px 8px 0";
  
  deleteButton.appendChild(deleteIcon);
  newTask.appendChild(deleteButton);
  deleteButton.style.border = "none";
  
  // Přidáme nový prvek seznamu
  tasksList.appendChild(newTask);
  count++;
  taskCountElement.innerHTML = "Máte " + count + " nedokončené úkoly";
  
  // Aktualizujeme text na obrazovce
  displayText.innerText = "Seznam úkolů:";
  // Vyčistíme pole pro vstup
  inputField.value = '';
  
  //taskCount.innerText = 'Počet';
  // Přidáme funkci pro smazání úkolu
  deleteButton.addEventListener('click', function() {
    tasksList.removeChild(newTask);
    count--;
    // Pokud nejsou žádné úkoly, vrátíme původní text na obrazovce
    if (tasksList.children.length === 0) {
      taskCountElement.innerHTML = "Máte " + count + " nedokončené úkoly";
      displayText.innerText = 'Momentálně v úkolníčku, žádný úkol nemáte.';
      lableInputText.style.display = "block"
      lableInputText.style.display = "flex";
      lableInputText.style.justifyContent = "center";
      lableInputText.style.alignItems = "center";
      lableInputText.style.textAlign = "center";

      
    }
    if(taskCountElement.length = 0){
      taskCountElement.style.display = "none";
    }

  });
  
  clearButton.addEventListener('click', function() {

  // Odstranění všech úkolů z seznamu
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.firstChild);
    
  }
  // Nastavení počtu úkolů na nulu a aktualizace zobrazení
  count = 0;
  taskCountElement.innerHTML = "Máte " + count + " nedokončené úkoly";
  displayText.innerText = 'Momentálně v úkolníčku, žádný úkol nemáte.';
  counter.style.display = "none";
  clearButton.style.display = "none";
  lableInputText.style.display = "block";
  lableInputText.style.display = "flex";
  lableInputText.style.textAlign = "center";
  lableInputText.style.alignItems = "center";
  lableInputText.style.justifyContent = "center";

});
  
});
