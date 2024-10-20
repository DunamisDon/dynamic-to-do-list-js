// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    //Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    //Create the addTask Function
    function addTask(taskText, save = true) {
        // Task text passed or retrieved from input field
        taskText = taskText || taskInput.value.trim();

        //Check if taskText is empty
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        //Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        //Create a Remove Buttton for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); 

        // Assign the Remove Button event to delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove from DOM
            removeTask(taskText); // Remove from Local Storage
        };

        // Append the remove button to the task (li) element
        li.appendChild(removeBtn);

        // Append the task (li) to the taskList
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Save to Local Storage if not loading existing tasks
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add without saving again
    }

    // Function to remove a task from Local Storage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove task from array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage
    }

    //Attach Event Listeners
    // Add task when button is clicked
    addButton.addEventListener('click', () => addTask());

    // Add task when "Enter" key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
