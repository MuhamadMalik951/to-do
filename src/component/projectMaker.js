import { startBtn, storeLabel , firstLable, cancelForm, form, sidebarProjects, project, todoContainer, projectArray, todoFormation, localProjectArray, setDataSet} from '../index.js';


const projectFormation = (function()
{
    function showForm(){
        form.style.display = "flex"
        startBtn.style.display = 'none'       
        form.style.opacity = '100'
        document.getElementById('name').value = ''
        
        cancelForm.addEventListener('click', ()=> {
            form.style.display = 'none'
            form.style.opacity = '0'
            startBtn.style.display = 'block'
            firstLable.innerHTML= storeLabel[0]
            
        })
    }
    
    function reverseShowForm(){
        form.style.display = 'none'
        form.style.opacity = '0'
        startBtn.style.display = 'block' 
    }
    
    function createProjectarray(name) {
        return (
                projectArray.push( {
                name : name,
                todo : [],
                })
                ), localProjectArray()

    }

    function clearProject() {
        const projectChildren = project.childNodes
        projectChildren.forEach(child => {
        })
    }
    

    function projectCreate(index) {
        todoFormation.searchTodo()
        const flexContainer = document.createElement('div')
        flexContainer.classList.add('flex-container')
        project.appendChild(flexContainer)
        const projectName = document.createElement('div')
        projectName.classList.add('project-name')
        projectName.textContent = projectArray[index].name 
        flexContainer.appendChild(projectName)
        todoFormation.createTodocreatebtn(flexContainer) 
        project.appendChild(todoContainer)

    }


    function projectDel(append, index){

        const delBtn = document.createElement('button')
        delBtn.classList.add('delbtn')
        delBtn.dataset.set = index
        delBtn.innerHTML = '<img class="trash" src="./src/assets/delete.svg" alt="">'
        append.appendChild(delBtn)
        
        delBtn.addEventListener('click', (event) => {
            event.stopPropagation()
            console.log(index)
            if(projectArray.length > 1) {
                projectArray.splice(index, 1)
                clear(sidebarProjects)
                projectArray.forEach((projectt, indexx) => {
                    sidebarProjectCreater(projectt.name, indexx)
                    clear(project)
                    console.log('79')
                    projectCreate(indexx)
                setDataSet(indexx)
                clear(todoContainer)
                projectArray[indexx].todo.forEach(
                (element, index) => {
                    todoFormation.renderTodo(element.name, index, element.description, element.dueDate, element.priority)
                }
                )
            })
        }
        else {
            console.log('you can not delete this.')
        }
    })
    localProjectArray()
    }
    
    
    
    function sidebarProjectCreater(name, index){

        const sidebarProjectcontainer = document.createElement('div')
        sidebarProjectcontainer.classList.add('sidebarcontainer')
        sidebarProjectcontainer.dataset.set = index
        sidebarProjects.appendChild(sidebarProjectcontainer)

        sidebarProjectcontainer.addEventListener('click', (event) => {

            console.log('sidebarProjectcontainer is clicked')
            if(event.target.classList.contains('sidebarcontainer') || event.target.classList.contains('sidebar-project') ){
                const tabs = document.querySelectorAll('.sidebarcontainer')
                tabs.forEach((tab) => {
                    tab.classList.remove('changecolor')
                });
                if(event.target.classList.contains('sidebarcontainer')){
                    event.target.classList.add('changecolor')
                }
                if(event.target.classList.contains('sidebar-project')) {
                    event.target.parentNode.classList.add('changecolor')
                }

            }
            localProjectArray()
            clear(project)
            console.log('122')
            projectCreate(index)
            clear(todoContainer)
            setDataSet(index)
            project.dataset.set = index
            projectArray[index].todo.forEach(
                (element, index) => {
                    todoFormation.renderTodo(element.name, index, element.description, element.dueDate, element.priority)
                }
                )
        })
        
        const sidebarProject = document.createElement('div')
        sidebarProject.classList.add('sidebar-project')
        sidebarProject.dataset.set = index
        project.dataset.set = index
        sidebarProject.textContent = name
        sidebarProjectcontainer.appendChild(sidebarProject)
        projectDel(sidebarProjectcontainer, index)

        
    }

    function clear(entry)
    {
        entry.innerHTML = ''
    }

    return {
        showForm, reverseShowForm, createProjectarray, createProjectarray, projectCreate, sidebarProjectCreater, clear, clearProject
    }
})()


export {
    projectFormation
}