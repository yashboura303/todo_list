divList = document.getElementById('projectSection');
divList.addEventListener('click',deleteButton);
localStorage.setItem('0', 'Default Todo')
let project_count = 1

//new project btn funtionality
function showDiv(){
    let x = document.getElementById('showProject');
    x.style.display = "flex";
}
function closeDiv(){
    let x = document.getElementById('showProject');
    x.style.display = "none";
}

//button add new project to localStore
function addProject(){
    localStorage.setItem(`${project_count}` ,document.getElementById("projectName").value);
    addProjectDiv(project_count);
    project_count+=1;
    
    closeDiv();
}

//add project to DOM
function addProjectDiv(project_count){
    let section = document.getElementById('projectSection');
    localStorage.getItem(`${project_count}`);
    let newDiv = document.createElement('div');
    newDiv.className = 'projectDiv';
    let newBtn = document.createElement('button');
    let newP = document.createElement('p');
    p = localStorage.getItem(project_count);
    newP.innerHTML = p;
    newP.className = 'projectName';
    newBtn.className = ('btn btn-dark btn-sm');
    newBtn.innerHTML = 'Delete';
    newBtn.setAttribute("id","deleteProject");
    newDiv.appendChild(newP);
    newDiv.appendChild(newBtn);
    section.appendChild(newDiv);
}


//button delete project
function deleteButton(e){

    if (e.target.classList.contains('btn')){
        valueP = e.target.parentElement.firstElementChild.innerHTML;
        for (let i = 0,len = localStorage.length;i<len; i++){
            var key = localStorage.key(i);
            var value = localStorage[key];
            if (value == valueP){
                localStorage.removeItem(key);
                div = e.target.parentElement;
                divList.removeChild(div);    
            }
        } 
    }
    else{
        showTodos();
    }
};


function showTodos(e){
    document.getElementById('modal_todos').style.display = "block";
}
function closeTodoDiv(e){
    document.getElementById('modal_todos').style.display = "none";
}




