import { projectFormation } from './component/projectMaker.js';
import { todoFormation } from './component/todoMaker.js';
import {
  localStorageFunction,
  localProjectArray,
  setDataSet,
} from './component/localStorage.js';

export const container = document.querySelector('.container');
export const firstContainer = document.querySelector('.first-container');
export const secondContainer = document.querySelector('.second-container');
export const startBtn = document.querySelector('.startbtn');
export const form = document.querySelector('.form');
export const formName = document.querySelector('#name');
export const projectContainer = document.querySelector('.project-container');
export const sidebarProjects = document.querySelector('.sidebar-projects');
export const sidebarProjectsChildren = sidebarProjects.children;
export const project = document.querySelector('.project');
export const todoContainer = document.querySelector('.todocontainer');
export const firstLable = document.querySelector('.firstlabel');
export const nameInput = document.querySelector('.nameinput');
export const cancelForm = document.querySelector('.cancel');
export {
  projectFormation,
  todoFormation,
  localProjectArray,
  localStorageFunction,
  setDataSet,
};
export const projectArray = [];

export const storeLabel = [];

startBtn.addEventListener('click', function () {
  projectFormation.showForm();
  nameInput.focus();
  storeLabel.push(firstLable.innerHTML);
});

form.addEventListener('submit', function () {
  firstLable.innerHTML = storeLabel[0];
  event.preventDefault();
  projectFormation.reverseShowForm();
  projectFormation.createProjectarray(formName.value);
  projectFormation.clear(sidebarProjects);
  projectArray.forEach((projectt, index) => {
    projectFormation.sidebarProjectCreater(projectt.name, index);
    projectFormation.clear(project);
    projectFormation.projectCreate(index);
  });
});
form.addEventListener('input', () => {
  firstLable.textContent = '';
});

window.addEventListener('load', () => {
  localStorageFunction();
  if (projectArray.length == 0) {
    projectArray.push({
      name: 'Default Project',
      todo: [
        {
          name: 'Delete Default ',
          description:
            'You can delete default project by adding more project. THANK YOU!',
          date: 'not yet',
          priority: 'HIGH',
          active: true,
        },
        {
          name: 'Default Task',
          description: 'Thi is the default description',
          date: 'not yet',
          priority: 'HIGH',
        },

        {
          name: 'Fitness Routine',
          description: 'Hit the gym for a workout session.',
          date: '2023-11-21',
          priority: 'LOW',
        },
        {
          name: 'Prepare Presentation',
          description:
            'Compile data and create a presentation for the upcoming conference.',
          date: '2023-11-25',
          priority: 'HIGH',
          active: true,
        },
        {
          name: 'Meeting with Team',
          description: 'Discuss project updates and assign tasks for the week.',
          date: '2023-11-20',
          priority: 'MEDIUM',
        },
        {
          name: 'Client Call',
          description:
            'Scheduled call with important client to address their concerns.',
          date: '2023-11-22',
          priority: 'HIGH',
          active: true,
        },

        {
          name: 'Prepare Presentation',
          description:
            'Compile data and create a presentation for the upcoming conference.',
          date: '2023-11-25',
          priority: 'HIGH',
        },

        {
          name: 'Project Deadline',
          description: 'Complete and submit the project by the deadline.',
          date: '2023-11-30',
          priority: 'HIGH',
        },
        {
          name: 'Research New Technologies',
          description:
            'Explore and gather information on emerging technologies in the industry.',
          date: 'not yet',
          priority: 'MEDiUM',
        },
        {
          name: 'Family Dinner',
          description: 'Plan and organize a special dinner with family.',
          date: '2023-12-05',
          priority: 'LOW',
        },
        {
          name: 'Read Book',
          description: 'Start reading the new book on personal development.',
          date: '2023-11-23',
          priority: 'MEDIUM',
        },

        {
          name: 'Client Proposal',
          description: 'Draft and send a proposal to potential client XYZ.',
          date: '2023-11-28',
          priority: 'HIGH',
        },
        {
          name: 'Language Learning',
          description: 'Dedicate 30 minutes to practice a new language.',
          date: 'not yet',
          priority: 'LOW',
        },
        {
          name: 'Team Building Activity',
          description:
            'Plan a team-building activity for the end of the month.',
          date: '2023-11-29',
          priority: 'MEDIUM',
        },
        {
          name: 'Update Resume',
          description:
            'Review and update your resume with recent achievements.',
          date: 'not yet',
          priority: 'MEDIUM',
        },
        {
          name: 'Networking Event',
          description: 'Attend the industry networking event on Saturday.',
          date: '2023-12-02',
          priority: 'HIGH',
        },
        {
          name: 'Budget Review',
          description:
            'Review and update monthly budget for personal finances.',
          date: '2023-11-27',
          priority: 'MEDIUM',
        },
        {
          name: 'Home Maintenance',
          description: 'Schedule a plumber for fixing the leaky faucet.',
          date: '2023-11-26',
          priority: 'HIGH',
        },
        {
          name: 'Explore New Recipes',
          description: 'Try cooking a new recipe for dinner.',
          date: 'not yet',
          priority: 'LOW',
        },
        {
          name: 'Volunteer Opportunity',
          description:
            'Look for local volunteer opportunities for the weekend.',
          date: 'not yet',
          priority: 'MEDIUM',
        },
        {
          name: 'Tech Conference Registration',
          description: 'Register for the upcoming technology conference.',
          date: '2023-12-01',
          priority: 'HIGH',
        },
      ],
    });
  }
  if (projectArray) {
    projectArray.forEach((projectt, index) => {
      projectFormation.sidebarProjectCreater(projectt.name, index);
      projectFormation.clear(project);
      if (!localStorage.getItem('dataset')) {
        setDataSet(index);
      } else {
      }
      projectFormation.projectCreate(localStorage.getItem('dataset'));
    });
  }
});
const html = document.querySelector('.container');

window.addEventListener('load', () => {
  if (localStorage.getItem('dataset')) {
    project.dataset.set = localStorage.getItem('dataset');
  } else {
    localStorage.setItem('dataset', 0);
    project.dataset.set = localStorage.getItem('dataset');
  }
  if (projectArray[localStorage.getItem('dataset')]) {
    projectArray[localStorage.getItem('dataset')].todo.forEach(
      (element, index) => {
        todoFormation.renderTodo(
          element.name,
          index,
          element.description,
          element.dueDate,
          element.priority
        );
      }
    );
  } else {
    console.log('there are no todos in this array.');
  }
});
window.addEventListener('load', () => {
  sidebarProjects.childNodes.forEach((node) => {
    if (node.dataset.set == project.dataset.set) {
      node.classList.add('changecolor');
    }
  });
});

console.log('testing');
