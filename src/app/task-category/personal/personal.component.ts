import { Component } from '@angular/core';
import {WorkTask} from "../task.model";
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {FilterTaskPipe} from "../../filter-task.pipe";

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, FilterTaskPipe],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

  Task: WorkTask[] =[
    new WorkTask("Assignment","java assignment","02/04/24")
  ]

  newWorkTasksList: WorkTask = {
    taskName: '',
    description: '',
    deadline: '',
  };

 addTask(){
   // @ts-ignore
   this.Task.push({taskName:"",description:"",deadline:"",...this.newWorkTasksList});
   this.resetNewTask();
 }

  resetNewTask() {
    this.newWorkTasksList = {
      taskName: '',
      description: '',
      deadline: '',
    };
  }

  onDelete() {
   this.Task.pop()
  }

  searchTerm = '';

 filteredT: WorkTask[] = [];

 //Filter logic
 fT() {
   this.filteredT = this.Task.filter((tks) => tks.taskName.toLowerCase().includes(this.searchTerm.toLowerCase()));
 }

 updateT(tks: WorkTask) {
   console.log('Update:', tks);
 }

 //Update logic
 udT(index: number): void {
   this.newWorkTasksList = {...this.Task[index]};
   this.dT(index);
 }

 //Delete logic
 dT(index: number): void {
   this.Task.splice(index, 1);
 }
}
