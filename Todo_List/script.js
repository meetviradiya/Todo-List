const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please add task!")
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => li.classList.toggle("completed"));
  taskList.appendChild(li);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete"; // A simple "X" for the delete button

  deleteBtn.onclick = () => {
    li.remove(); // Removes the task when the button is clicked
  };

  li.appendChild(deleteBtn); // Add the delete button to the task
  taskList.appendChild(li); // Add the task to the list
  taskInput.value = ""; // Clear the input field

}
addTaskButton.addEventListener("click", addTask);