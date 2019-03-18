import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getTasks()
    this.addTask('0');
  }

  getTask(task_id){
    // console.log(task_id);
    // return 1;
    console.log("ID is ", task_id);
    return this._http.get('api/tasks/'+task_id);
  }

  getTasks(){
    return this._http.get('/api/tasks');
  }

  addTask(newTask){
    console.log(newTask);
    return this._http.post('/api/tasks', newTask);
  }
  deleteTask(task_id){
    console.log("deleting Task with Task ID "+task_id);
    return this._http.delete('api/tasks/delete/'+task_id);
  }
  editTask(editTask){
    console.log("editting task");
    return this._http.put('api/tasks/update/'+editTask._id,editTask);
}
}
