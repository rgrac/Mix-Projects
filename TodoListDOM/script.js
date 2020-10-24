let button = document.querySelector('button');
button.addEventListener("click", function(event){
	event.preventDefault();
	let ulImportant = document.getElementById("important")
	let ulNotImportant = document.getElementById("notImportant")
	let text = document.forms[0].elements[0].value;
	let todo = document.createElement("li");
	todo.addEventListener("click", function(event){
		todo.classList.toggle("li_strike")
	})
	todo.innerHTML = text;
	let dropValue = document.getElementById("dropDown").value
	if (dropValue == "Important") {
		ulImportant.appendChild(todo);
	} else {
		ulNotImportant.appendChild(todo);
	}
})
