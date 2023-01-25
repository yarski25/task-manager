import { Component, OnInit } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks : ITask[] = [];

  constructor(protected taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => (this.tasks = tasks));
  }

  public deleteTask(task: ITask){
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(
        (t) => {t.id !== task.id;} 
      ))
  }

  public toggleReminder(task: ITask){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  public addTask(task: ITask){
    this.taskService.addTask(task).subscribe(
      (task) => this.tasks.push(task));
  }

}
