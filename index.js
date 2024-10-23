const listBox = document.querySelector("#list-container");
const inputBox = document.querySelector("#input-box");

function addTask(){
    if (inputBox.value === ""){
        alert("You must write something");
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    saveData()
    inputBox.value = "";
}

listBox.addEventListener('click', (e)=> {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove('span')
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data", listBox.innerHTML)
}

function loadData(){
  listBox.innerHTML =  localStorage.getItem("data")
}

loadData();