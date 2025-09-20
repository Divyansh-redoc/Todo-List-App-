const inputField = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskContainer = document.getElementById('task-container');

addTaskBtn.addEventListener('click', addTask);

function addTask(){
	const inputData = inputField.value;
	if(!inputField.value){
		alert("please Enter Something");
	}else{
		createTaskBox(inputData);
	}
	saveData()
	inputField.value = "";
}

function createTaskBox(inputData){
	const taskBox = document.createElement('div');
	taskBox.classList.add("task_box");
	taskContainer.appendChild(taskBox);
	
	const taskText = document.createElement('SPAN');
	taskText.classList.add("task");
	taskText.innerText = inputData;
	taskBox.appendChild(taskText);
	
	const delbtn = document.createElement('BUTTON');
	delbtn.classList.add("delbtn");
	delbtn.innerHTML = "\u00d7";
	taskBox.appendChild(delbtn);

	saveData()
}

taskContainer.addEventListener('click', (event) =>{
	if(event.target.tagName === "DIV"){
		event.target.firstElementChild.classList.toggle("completed");
			event.target.classList.toggle("comp");
			saveData()
	}else if (event.target.classList.contains("delbtn")){
		event.target.parentElement.remove();
		saveData();
	}
});

function saveData(){
	localStorage.setItem("data",taskContainer.innerHTML);
}

function showData(){
	taskContainer.innerHTML = localStorage.getItem("data");
}


showData();
