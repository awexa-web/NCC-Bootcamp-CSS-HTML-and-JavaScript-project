document.getElementById('addTask').addEventListener('click', function() {
   
    const taskText = document.getElementById('taskInput').value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    
    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    });
    
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(' ' + taskText));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        taskList.removeChild(li);
    });
    
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    
    document.getElementById('taskInput').value = '';
}); 