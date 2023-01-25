import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  protected showAddTask: boolean = false;
  protected subject = new Subject<any>();

  constructor() { }

  public toogleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  public onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
