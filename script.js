function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  let checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  checkBox.classList.add("check-button");
  checkBox.onclick = function () {
    li.style.textDecoration = checkBox.checked ? "line-through" : "none";
  };

  let taskText = document.createElement("span");
  taskText.textContent = taskInput.value;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList = "delete-button";
  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(checkBox);
  li.appendChild(taskText);
  li.appendChild(li);

  taskInput.value = "";
}
