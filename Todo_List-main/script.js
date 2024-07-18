

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskUl = document.getElementById('task-ul');

        const taskLi = document.createElement('li');
        taskLi.textContent = taskText;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        const completeButton = document.createElement('button');
        completeButton.className = 'complete';
        completeButton.textContent = '✓';
        completeButton.onclick = () => {
            taskLi.classList.toggle('complete');
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = '+';

        deleteButton.onclick = () => {
            taskUl.removeChild(taskLi);
        };

        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(deleteButton);
        taskLi.appendChild(taskButtons);

        taskUl.appendChild(taskLi);

        taskInput.value = '';
    }
}
function vari(){
    
   
      VanillaTilt.init(document.querySelector("#todo"), {
          max: 4,
          speed: 800,
      scale: 1.03,
      glare: true,
      "max-glare": 0.5,
      });
   
}
vari();

