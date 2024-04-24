export class WorkTask {
  taskName: string;
  description: string;
  deadline: string;

  constructor(taskName:string,description:string,deadline:string){
    this.taskName = taskName;
    this.description = description;
    this.deadline = deadline;

}
}
