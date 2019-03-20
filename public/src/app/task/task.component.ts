import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() id: any;
  all_tasks :any;
  newTask: any;



  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // get One(id)    
    this.newTask = { title: "", description: "" }

  }
  
  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data =>{
      console.log("got data from post back", data);
      this.newTask = { title: "", description: "" }
    })
  }

}
