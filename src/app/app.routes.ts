import { Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {TaskCategoryComponent} from "./task-category/task-category.component";
import {TaskStatusComponent} from "./task-status/task-status.component";
import {HomeComponent} from "./home/home.component";
import {PersonalComponent} from "./task-category/personal/personal.component";
import {WorkComponent} from "./task-category/work/work.component";
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task-category', component: TaskCategoryComponent, children: [
      {path: '', component: PersonalComponent}, // Default route for task-category
      {path: 'personal', component: PersonalComponent},
      {path: 'work', component: WorkComponent},
    ]},
  {path: 'task-status', component: TaskStatusComponent}
];
