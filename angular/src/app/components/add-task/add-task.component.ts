import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/interfaces/ITask';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() public onAddTask: EventEmitter<ITask> = new EventEmitter();
  public text: string = "";
  public day: string = "";
  public reminder: boolean = false;
  public showAddTask: boolean = false;
  public subscription: Subscription = Subscription.EMPTY;

  constructor(protected uiService: UiService){
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value)=>(this.showAddTask=value));
  }

  ngOnInit(): void{

  }

  public onSubmit(): void{
    if(!this.text){
      alert('Please add a task!');
      
      return;
    }

    const newTask: ITask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;

  }

}
