import { Component } from '@angular/core';
import {WorkTask} from "../task-category/task.model";
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Task: WorkTask[] =[
    // new WorkTask("Assignment","java assignment","02/04/24")
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
}
