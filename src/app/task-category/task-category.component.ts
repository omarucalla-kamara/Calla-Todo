import { Component } from '@angular/core';
import {PersonalComponent} from "./personal/personal.component";
import {WorkComponent} from "./work/work.component";
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-task-category',
  standalone: true,
  imports: [
    PersonalComponent,
    WorkComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './task-category.component.html',
  styleUrl: './task-category.component.css'
})
export class TaskCategoryComponent {

}
