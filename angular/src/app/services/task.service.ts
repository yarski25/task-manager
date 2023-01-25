import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ITask } from '../interfaces/ITask';
import { TASKS } from '../tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  protected apiUrl = 'http://localhost:5000/tasks';

  constructor(protected http: HttpClient) { }

  public getTasks(): Observable<ITask[]> {
    
    return this.http.get<ITask[]>(this.apiUrl);
  }

  public deleteTask(task: ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<ITask>(url);
  }

  public updateTaskReminder(task: ITask): Observable<ITask>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<ITask>(url, task, httpOptions);
  }

  public addTask(task: ITask): Observable<ITask>{
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }
}
