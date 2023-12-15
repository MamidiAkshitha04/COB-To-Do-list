const input = document.getElementById("inputfield");
const list = document.getElementById("list");
const add = document.getElementById("add");

function data(){
    if(input.value==''){
        alert("Enter a task");
    }
    else{
        let li = document.createElement("li");
        const item = `<div class="val"><div ondblclick="completed(this)">${input.value}</div>
        <button class="del-btn">Delete</button></div>`;
        li.innerHTML = item;
        list.appendChild(li);
    }
    input.value='';
}
function completed(c){
    if(c.parentElement.querySelector("div").style.textDecoration === ""){
        c.parentElement.querySelector("div").style.textDecoration = "line-through green";
    }
}
list.addEventListener('click',(event)=>{
    if(event.target.classList.contains("del-btn")){
        const listitem= event.target.parentElement.parentElement;
        list.removeChild(listitem);
    }
})
  