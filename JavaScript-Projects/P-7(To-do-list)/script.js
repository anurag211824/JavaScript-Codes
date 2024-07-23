const inputText = document.querySelector(".inputText");
const addTaskButton = document.querySelector(".add");
const taskList = document.querySelector(".taskList");

addTaskButton.addEventListener("click", taskAdd);

function taskAdd() {
    let text = inputText.value.trim();
    if (text !== "") {
        const taskDiv = document.createElement("div");
        taskDiv.className = "taskdiv"; // Added quotes and corrected class name
        taskDiv.textContent = text; // Changed innerHTML to textContent for security
        const deleteBtn = document.createElement("button");
        deleteBtn.className="button"
        deleteBtn.textContent = "Delete";
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskDiv);
        });
        inputText.value = "";
    }
}
