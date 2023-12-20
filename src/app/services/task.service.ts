import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  // constructor(private http:HttpClient) { } this doesn't work for some reason

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}