let inputDescription = document.querySelector(`#description`);
let inputTitle = document.querySelector(`#title`);
let submitButton = document.querySelector(`#addTask`);
let taskArea = document.querySelector(`.task`);
let tsk_cntr = document.querySelector(`.tsk-container`);

let notask = true;
let taskId = 0;

submitButton.addEventListener('click', () => {
    if(inputTitle.value == 0){
        inputTitle.classList.add('is-invalid');
    }
    else if(inputTitle.value != 0){
        inputTitle.classList.remove('is-invalid');
    }
    if (inputDescription.value == 0){
        inputDescription.classList.add('is-invalid');
    }
    else if(inputDescription.value != 0){
        inputDescription.classList.remove('is-invalid');
    }
    
    if (inputTitle.value!= 0 && inputDescription.value!= 0 && notask == true){
        taskArea.innerHTML = ``
        notask = false;
        taskArea.innerHTML +=
        `
        <div class="tsk-container row justify-content-between" id="task-${taskId}">
            <div class="tsk-info">
                <div class="tsk-title">${inputTitle.value}</div>
                <div class="tsk-description">${inputDescription.value}</div>
            </div>
            
            <div class="tsk-control">
                <button class="btn flex btn-flx" onclick="deleteTask('task-${taskId}')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        `
        taskId++;
        inputTitle.value = ``;
        inputDescription.value = ``;
    }

    else if (inputTitle.value!= 0 && inputDescription.value!= 0 && notask == false){
        taskArea.innerHTML +=
        `
        <div class="tsk-container row justify-content-between" id="task-${taskId}">
            <div class="tsk-info">
                <div class="tsk-title">${inputTitle.value}</div>
                <div class="tsk-description">${inputDescription.value}</div>
            </div>
            
            <div class="tsk-control">
                <button class="btn flex btn-flx" onclick="deleteTask('task-${taskId}')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        `
        taskId++;
        inputTitle.value = ``;
        inputDescription.value = ``;
    }
});

///////////////f**king deletion///////////////
function deleteTask(taskId) {
    let task = document.querySelector(`#${taskId}`);
    if (task) {
        task.remove();
        let nonetsk = document.querySelectorAll(`.tsk-container`).length==0

        if (nonetsk) {
            taskArea.innerHTML =  `
            <hr class="task-hr opacity-100">
            <div class="task-status">No tasks</div>
            <hr class="task-hr opacity-100">
            `

        }
    }
}
/////////////////////////////////////////////


textarea = document.querySelector(`.textarea`);
textarea.addEventListener('input', autoResize, false);
function autoResize() {
    this.style.height = '';
    this.style.height = this.scrollHeight + 'px';
};
