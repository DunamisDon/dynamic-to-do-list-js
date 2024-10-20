document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve the task text from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert('Please enter a task.');
            return; // Stop further execution if input is empty
        }

        // Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a Remove Button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        //Assign the Remove Button event to delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the task (li) element
        li.appendChild(removeBtn);

        // Append the task (li) to the taskList
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    //Attach Event Listeners
    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when "Enter" key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
