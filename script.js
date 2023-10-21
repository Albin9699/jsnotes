const notesContainer=document.querySelector(".notes-container")
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll("input-box");

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let button = document.createElement("button");
    button.title="Delete"
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    button.className = 'delete-btn';
    notesContainer.appendChild(inputBox).appendChild(button);
})

notesContainer.addEventListener("click", function() {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
    }
})