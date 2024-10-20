// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Create the addTask Function
    function addTask() {
        // Retrieve the task text from the input field
        const taskText = taskInput.value.trim();

        // Step 3: Check if taskText is empty
        if (taskText === "") {
            alert('Please enter a task.');
            return; // Stop further execution if input is empty
        }

        // Step 4: Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 5: Create a Remove Button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn'; // Using className to set the class

        // Step 6: Assign the Remove Button event to delete the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Step 7: Append the remove button to the task (li) element
        li.appendChild(removeBtn);

        // Append the task (li) to the taskList
        taskList.appendChild(li);

        // Step 8: Clear the input field
        taskInput.value = '';
    }

    // Step 9: Attach Event Listeners
    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when "Enter" key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
