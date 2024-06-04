window.addEventListener("load", () => {
    const add = document.getElementById("add");
    const task = document.getElementById("task");
    const error = document.getElementById("error");
    const container = document.getElementById("container");

    add.addEventListener("click", addTask);

    function addTask(event) {
        event.preventDefault();
        const taskValue = task.value.trim();
        
        if (taskValue === "") {
            error.style.display = "block";
            return; 
        }

        error.style.display = "none";

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.width = "3%";
        checkbox.onclick = function () {
            if(checkbox.checked) {
              taskText.style.textDecoration = "line-through";
              listItem.classList.add("checked");
            } else {
              taskText.style.textDecoration="none";
              listItem.classList.remove("checked");
            }
          }
        taskDiv.appendChild(checkbox);

        const taskText = document.createElement("input");
        taskText.type = "text";
        taskText.style.width = "70%";
        taskText.style.outline = "none";
        taskText.style.border = "none";
        taskText.style.background = "none";
        taskText.value = taskValue;
        taskText.readOnly = true;
        taskText.classList.add("task-text");
        taskDiv.appendChild(taskText);

        const editBut = document.createElement("button");
        editBut.classList.add("edit");
        editBut.style.color = "antiquewhite";
        editBut.style.backgroundColor = "rgba(53, 53, 56, 0.877)";
        editBut.style.border = "none";
        editBut.style.borderRadius = "4px";
        editBut.innerHTML = '<i class="material-icons">edit</i>';
        editBut.addEventListener("click", () => {
            taskText.readOnly = false;
            taskText.focus();
        });
        taskDiv.appendChild(editBut);

        const delBut = document.createElement("button");
        delBut.classList.add("delete");
        delBut.style.color = "antiquewhite";
        delBut.style.backgroundColor = "rgba(1, 4, 182, 0.877)";
        delBut.style.border = "none";
        delBut.style.borderRadius = "4px";
        delBut.innerHTML = '<i class="material-icons">delete</i>';
        delBut.addEventListener("click", () => {
            container.removeChild(taskDiv);
        });
        taskDiv.appendChild(delBut);

        container.appendChild(taskDiv);

        task.value = "";
    }
});
