const input = document.getElementById('task-name')
const addBtn = document.getElementById('btn');
const tasks = document.getElementsByClassName('tasks');

addBtn.addEventListener('click',()=>{
  if(input.value.length !== 0){
    const template = `
    <div class="task-details">
      <div class="task">
        <label>${input.value}</label>
      </div>
      <div class="actions">
        <i class="fas fa-clipboard-check fa-lg" id="complete"></i>
        <i class="fas fa-eraser fa-lg" id="remove"></i>
      </div>
    </div>`

    const ele = document.createElement('div');
    ele.classList.add('new-task');
    ele.innerHTML = template;
    tasks[0].appendChild(ele);
    input.value = "";
  }else{
    alert("Enter a task to be added");
  }
  
});


tasks[0].addEventListener('click', (e)=>{
  if(e.target.classList.contains('fa-clipboard-check')){
    e.target.closest('.new-task').querySelector('.task').classList.add('completed');
  }
});

tasks[0].addEventListener('click', (e)=>{
  if(e.target.classList.contains('fa-eraser')){
    e.target.closest('.new-task').remove();
  }
});

