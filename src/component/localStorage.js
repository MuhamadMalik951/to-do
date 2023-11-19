
import { projectArray} from '../index.js';

    export function localProjectArray() {
            localStorage.setItem('projectArray', JSON.stringify(projectArray));
        }
        
    export function setDataSet(index) {
        localStorage.setItem('dataset', index)

    }

    export function localStorageFunction(){

        const getLocalProjectArray = JSON.parse(localStorage.getItem('projectArray')); 

        if(getLocalProjectArray){
            
            getLocalProjectArray.forEach((item) => {
                projectArray.push(item) 
            })
        } 
        

    } 