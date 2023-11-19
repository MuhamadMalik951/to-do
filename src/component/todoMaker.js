
import { project, container, todoContainer, projectArray, projectFormation, localProjectArray, projectContainer} from '../index.js';


const todoFormation = (function(){

    function checker(){
        console.log('checked')
    }

    function createTodocreatebtn(entry){
        const createTodobtn = document.createElement('button')
        createTodobtn.textContent = "+ Create Task"
        createTodobtn.classList.add('addtodo')
        entry.appendChild(createTodobtn)
        
        createTodobtn.addEventListener('click', () => {
            container.classList.add('blur')
            createTodobtn.style.display = 'none'
            todoFormCreate(createTodobtn)
        })  
        
    }
    
    function createTodo(index, todoName,description, date, priority){
        
        return ( 
            projectArray[index].todo.push(
            {
                name: todoName,
                description: description,
                dueDate: date,
                priority: priority,
                active: false
            }), 
            localProjectArray()
        )
    }
        function todoFormCreate(btn) {

            const todoForm = document.createElement('form');
            todoForm.classList.add('todoform');
            const label = document.createElement('label');
            label.setAttribute('for', 'todoName');
            label.textContent = 'Name';
            todoForm.appendChild(label);
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'todoName';
            todoForm.appendChild(input);

            const descLabel = document.createElement('label');
            descLabel.setAttribute('for', 'todoDesc');
            descLabel.textContent = 'Description';
            todoForm.appendChild(descLabel);
            const descInput = document.createElement('input');
            descInput.type = 'text';
            descInput.className = 'todoName';
            todoForm.appendChild(descInput);

            const dateLabel = document.createElement('label');
            dateLabel.setAttribute('for', 'todoDate');
            dateLabel.textContent = 'Date';
            todoForm.appendChild(dateLabel);
            const dateInput = document.createElement('input');
            dateInput.type = 'date';  
            dateInput.className = 'todoDate';
            todoForm.appendChild(dateInput);

            const priorityLabel = document.createElement('label');
            priorityLabel.setAttribute('for', 'todoPriority');
            priorityLabel.textContent = 'Priority';
            todoForm.appendChild(priorityLabel);
            const prioritySelect = document.createElement('select');
            prioritySelect.className = 'todoPriority';
            todoForm.appendChild(prioritySelect);

            const priorities = ['LOW', 'MEDIUM', 'HIGH'];
            
            priorities.forEach(priority => {
                const option = document.createElement('option');
                option.value = priority.toUpperCase();
                option.text = priority.toUpperCase();
                prioritySelect.appendChild(option);
            });

            const submitBtn = document.createElement('button')
            submitBtn.textContent = 'submit'
            submitBtn.type = 'submit'
            
            const cancelBtn = document.createElement('button')
            cancelBtn.textContent = 'cancel'
            cancelBtn.type = 'button'
            
            todoForm.appendChild(submitBtn);
            todoForm.appendChild(cancelBtn)
            document.body.appendChild(todoForm);
            
            
            cancelBtn.addEventListener('click', () => {
            
                container.classList.remove('blur')
                todoForm.style.display = 'none'
                btn.style.display = 'flex'
            })


            todoForm.addEventListener('submit', () => {
                event.preventDefault()
                container.classList.remove('blur')
                projectFormation.clear(todoContainer)
                todoForm.style.display = 'none'
                createTodo(project.dataset.set, input.value, descInput.value, dateInput.value, prioritySelect.value )
                btn.style.display = 'flex'
                projectArray[project.dataset.set].todo.forEach(
                (element, index) => {
                    renderTodo(element.name, index, element.description, element.dueDate, element.priority )
                }
                )
        })


        window.addEventListener('load', () => {
            projectArray[project.dataset.set].todo.forEach(
                (element, index) => {
                    renderTodo(element.name, index, element.description, element.dueDate, element.priority )
                }
                )
        })
        
    }


    function todoEditForm(name, description, date, priority, index, btn) {



        const todoForm = document.createElement('form');
        todoForm.classList.add('todoform');
        const label = document.createElement('label');
        label.setAttribute('for', 'todoName');
        label.textContent = 'Name';
        todoForm.appendChild(label);
        const input = document.createElement('input');
        input.type = 'text';
        input.value = name;
        input.className = 'todoName';
        todoForm.appendChild(input);


        const descLabel = document.createElement('label');
        descLabel.setAttribute('for', 'todoDesc');
        descLabel.textContent = 'Description';
        todoForm.appendChild(descLabel);
        const descInput = document.createElement('input');
        descInput.type = 'text';
        descInput.value = description;
        descInput.className = 'todoName';
        todoForm.appendChild(descInput);

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'todoDate');
        dateLabel.textContent = 'Date';
        todoForm.appendChild(dateLabel);
        const dateInput = document.createElement('input');
        dateInput.type = 'date';  
        dateInput.value = date;
        dateInput.className = 'todoDate';
        todoForm.appendChild(dateInput);


        const priorityLabel = document.createElement('label');
        priorityLabel.setAttribute('for', 'todoPriority');
        priorityLabel.textContent = 'Priority';
        todoForm.appendChild(priorityLabel);
        const prioritySelect = document.createElement('select');
        prioritySelect.className = 'todoPriority';
        todoForm.appendChild(prioritySelect);
        
        const priorities = ['LOW', 'MEDIUM', 'HIGH'];
        
        priorities.forEach(priority => {
            const option = document.createElement('option');
            option.value = priority.toUpperCase();
            option.text = priority.toUpperCase(); 
            prioritySelect.appendChild(option);
        });

        const submitBtn = document.createElement('button')
        submitBtn.textContent = 'Update'
        submitBtn.type = 'submit'
        
        const cancelBtn = document.createElement('button')
        cancelBtn.textContent = 'cancel'
        cancelBtn.type = 'button'
        
        todoForm.appendChild(submitBtn);
        todoForm.appendChild(cancelBtn)
        document.body.appendChild(todoForm);
        
        
        cancelBtn.addEventListener('click', () => {
        
            container.classList.remove('blur')
            todoForm.style.display = 'none'
            btn.style.display = 'flex'
        })

        
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            container.classList.remove('blur')
            projectFormation.clear(todoContainer)
            todoForm.style.display = 'none'
            console.log(project.dataset.set)
            console.log(index)
            changeTodo(project.dataset.set, index, input.value, descInput.value, dateInput.value, prioritySelect.value)
            btn.style.display = 'flex'
            projectArray[project.dataset.set].todo.forEach(
            (element, index) => {
                renderTodo(element.name, index, element.description, element.dueDate, element.priority )
            }
            ), 
            localProjectArray()
    })
    }

    function searchTodo(){
        const searchTodo = document.createElement('input');
        searchTodo.setAttribute('type', 'text');
        searchTodo.setAttribute('placeholder', 'Search Todos');
        searchTodo.setAttribute('id', 'searchInput'); 
        searchTodo.innerHTML = '<img class="trash" src="./src/assets/delete.svg" alt="">'
        project.appendChild(searchTodo)

        searchTodo.addEventListener('input', () => {
            const searchQuery = searchTodo.value.toLowerCase();
            projectArray[project.dataset.set].todo.forEach((element) => {
                const todoName = element.name.toLowerCase();
                const shouldDisplay = todoName.includes(searchQuery);
                if (shouldDisplay) {
                    const datasetValuesToFind = projectArray[project.dataset.set].todo.indexOf(element)
                    document.querySelector(`.todoBox[data-set="${datasetValuesToFind}"]`).style.display = 'flex' 
                } else {
                    const datasetValuesToFind = projectArray[project.dataset.set].todo.indexOf(element)
                    document.querySelector(`.todoBox[data-set="${datasetValuesToFind}"]`).style.display = 'none' 
                }
            });
        });
    } 

    function removeTodo(project, index){

        projectArray[project].todo.splice(index, 1)
        localProjectArray()
    }
    function changeTodo(project, index, name, description, date, priority){

        projectArray[project].todo[index].name = name
        projectArray[project].todo[index].description = description
        projectArray[project].todo[index].dueDate = date
        projectArray[project].todo[index].priority = priority

    }
    function priorityColorChanger(priority, todo){

        if(priority == 'LOW'){
            todo.style.color = 'lightgreen'
        }
        else if(priority == 'MEDIUM'){
            todo.style.color = 'Yellow'
        }
        else if(priority == 'HIGH'){
            todo.style.color = 'Red'
        }
    }
    
    function checkList(append, indexx, entry, project) {

            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.classList.add('checkbox-wrapper-15');

            const checkboxInput = document.createElement('input');
            checkboxInput.classList.add('inp-cbx');
            checkboxInput.id = 'cbx-' + indexx;
            checkboxInput.dataset.set = indexx;
            checkboxInput.type = 'checkbox';
            checkboxInput.style.display = 'none';
            checkboxInput.checked = entry

            const checkboxLabel = document.createElement('label');
            checkboxLabel.classList.add('cbx');
            checkboxLabel.htmlFor = 'cbx-' + indexx;

            const firstSpan = document.createElement('span');
            const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('width', '12px');
            svgElement.setAttribute('height', '9px');
            svgElement.setAttribute('viewBox', '0 0 12 9');
            const polylineElement = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            polylineElement.setAttribute('points', '1 5 4 8 11 1');
            svgElement.appendChild(polylineElement);
            firstSpan.appendChild(svgElement);

            const secondSpan = document.createElement('span');
            secondSpan.textContent = 'To-do';

            checkboxLabel.appendChild(firstSpan);
            checkboxLabel.appendChild(secondSpan);

            checkboxWrapper.appendChild(checkboxInput);
            checkboxWrapper.appendChild(checkboxLabel);

            append.appendChild(checkboxWrapper);


            checkboxInput.addEventListener('change', (event) => {
                if(checkboxInput.checked){
                append.parentNode.classList.add('dotted')
                projectArray[project].todo[indexx].active = true
                
            }
                else if(!checkboxInput.checked){
                    projectArray[project].todo[indexx].active = false
                append.parentNode.classList.remove('dotted')
            }
            localProjectArray()
        })
        
    } 
 
    function renderTodo(name, index, description, date, priority){

        const todoBox = document.createElement('div')
        todoBox.classList.add('todoBox')
        todoBox.dataset.set = index;
        todoContainer.appendChild(todoBox)
        
        const todo = document.createElement('div')
        todo.classList.add('todo')
        todo.classList.add('name')
        todo.textContent = name;
        todo.dataset.set = index;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('todo');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = description;
        descriptionDiv.dataset.set = index;
        
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('todo');
        dateDiv.classList.add('date');
        dateDiv.textContent = date;
        dateDiv.dataset.set = index;
        

        const priorityHolder = document.createElement('div')
        priorityHolder.classList.add('priorityholder')
        priorityHolder.classList.add('checkbox-wrapper-15')
        
        const priorityDiv = document.createElement('div');
        priorityDiv.classList.add('todo');
        priorityDiv.classList.add('priority');
        priorityDiv.textContent = priority.toUpperCase();
        priorityDiv.dataset.set = index;

        const delContainer = document.createElement('div') 
        delContainer.classList.add('delcontainer')
        const checkInput = projectArray[project.dataset.set].todo[index].active 
        todoBox.appendChild(priorityHolder)
        priorityHolder.appendChild(priorityDiv);
        todoBox.appendChild(todo)
        todoBox.appendChild(descriptionDiv);
        todoBox.appendChild(dateDiv);
        checkList(priorityHolder, index, checkInput, project.dataset.set)
        todoBox.appendChild(delContainer) 
        priorityColorChanger(priority, priorityDiv)
        editTodo(delContainer, index)
        createtodoDel(delContainer, index)
        }   

    function createtodoDel(para, index){

        const todoDel = document.createElement('button')
        todoDel.classList.add('todoedit')
        todoDel.classList.add('button-17')
        todoDel.innerHTML = '<img class="trashh" src="./src/assets/delete.svg" alt="">'
        todoDel.dataset.set = index
        para.appendChild(todoDel)

        todoDel.addEventListener('click', (event) => {

            console.log(index)
            console.log(project.dataset.set)
            removeTodo(project.dataset.set, index)
            projectFormation.clear(todoContainer)
            projectArray[project.dataset.set].todo.forEach(
                (element, index) => {
                    renderTodo(element.name, index, element.description, element.dueDate, element.priority)
                }
                ) 

        })
    }

    function editTodo(para, index){

        const todoEdit = document.createElement('button')
        todoEdit.classList.add('todoDel')
        todoEdit.classList.add('button-17')
        todoEdit.innerHTML = '<img class="edit" src="./src/assets/edit.svg" alt="">'
        todoEdit.dataset.set = index
        para.appendChild(todoEdit)

        todoEdit.addEventListener('click', (event) => {
            const checkBoxInputReplacer = document.querySelector('#cbx-' + index)

            if(checkBoxInputReplacer.checked){
                console.log('this is what happening right now. ')
            }
            else{

                container.classList.add('blur')
                const name = projectArray[project.dataset.set].todo[index].name 
                const description = projectArray[project.dataset.set].todo[index].description
                const date = projectArray[project.dataset.set].todo[index].dueDate
                const priority = projectArray[project.dataset.set].todo[index].priority
                console.log(priority)
                todoEditForm(name, description, date, priority, index, todoEdit)
                todoEdit.style.display = 'none'
                projectFormation.clear(todoContainer)
                projectArray[project.dataset.set].todo.forEach(
                (element, index) => {
                    renderTodo(element.name, index, element.description, element.dueDate, element.priority)
                }
                ) 
            }

        })

    }
    
    return{
        createTodocreatebtn, renderTodo, todoFormCreate, createTodo, createtodoDel, checker, searchTodo
    }
})()

export  {
    todoFormation
}

