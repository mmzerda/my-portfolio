function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;
    if (taskText === "") return;

      const li = document.createElement(li);
      li.textContent = taskText;
        

  const delBtn = document.createElement("button");
  delBtn.textContent = " ❌";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";

  saveTasks();
}

function saveTasks() {
  const allTasks = Array.from(document.querySelectorAll("#taskList li"))
                         .map(li => li.firstChild.textContent);
  localStorage.setItem("myTasks" , JSON.stringify(allTasks));
}  

window.onload = function () {
  const saved = localStorage.getItem("myTasks");
  if (saved) {
    const tasks = JSON.parse(saved);
    tasks.forEach(function (text) {
      document.getElementById("taskInput").value = text;
      addTask();
    });
  }
};

function clearAll() {
  if (confirm("Delete every task?")) {
    document.getElementById("tasklist").innerHTML = "";
    localStorage.removeItem("myTasks");
  }
}