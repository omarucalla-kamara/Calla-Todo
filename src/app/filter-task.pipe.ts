import { Pipe, PipeTransform } from '@angular/core';
import {WorkTask} from "./task-category/task.model";

@Pipe({
  name: 'filterTask',
  standalone: true
})
export class FilterTaskPipe implements PipeTransform {

  transform(value: WorkTask[], searchTerm: string): WorkTask[] {
    if (!value || !searchTerm) {
      return value;
    }
    return value.filter(task =>
      task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
