import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() public task: ITask = <ITask>{};
  @Output() public onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() public onToggleReminder: EventEmitter<ITask> = new EventEmitter();
  
  faTimes = faTimes;

  public onDelete(task: any){
    this.onDeleteTask.emit(task);
  }

  public onToggle(task: any){
    this.onToggleReminder.emit(task);
  }

}
