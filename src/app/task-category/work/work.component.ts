import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TasksInterface} from "../../Model/Tasks.interface";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  tasks: TasksInterface[] = []; // Array to store students
  tasksForm: FormGroup;
  errorMsg: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Initialize the student form with validation rules
    this.tasksForm = this.fb.group({
      taskName: ['', Validators.required, Validators.maxLength(10)],
      desc: ['', [Validators.required, Validators.maxLength(40)]],
      due: ['', [Validators.required, Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    if (this.tasksForm.valid) {
      const newTasks = this.tasksForm.value as TasksInterface; // Cast form values to Student
      this.tasks.push(newTasks);
      this.tasksForm.reset(); // Clear the form after successful submission
    } else {
      this.errorMsg = 'Please correct form errors.';
    }
  }
}
