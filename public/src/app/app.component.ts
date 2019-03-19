import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showDetails = false;
  clickedEdit = false;
  title = 'app';
  all_tasks :any;
  selectedTaskID: String;
  num:number;
  desc:any;
  newTask: any;
  editedtask :any;
  constructor(private _httpService: HttpService ){}

  ngOnInit() {
    // this.getAllThingies();
    // this.num = 7;
    this.newTask = { title: "", description: "" }
    this.editedtask ={ id:"", title: "", description: "" }
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data =>{
      console.log("got data from post back", data);
      this.newTask = { title: "", description: "" }
    })
  }

  editClick(id:string){
    this._httpService.getTask(id).subscribe(data =>this.editedtask = data);
    this.selectedTaskID = id;
    this.clickedEdit = !this.clickedEdit;
  }

  updateThing(){
    
    this._httpService.editTask(this.editedtask).subscribe(data => console.log(data))

  }

  addThing() {
    console.log("clicked");
    this._httpService.addTask1({title:'Build Rocket',description:'build a better rocket than SpaceX'})
    .subscribe(data => {
      console.log(data);
      this.getAllThingies();
    });

  }

  deleteTask(id:string){
    this._httpService.deleteTask(id).subscribe(data => console.log("deleted"))
  }

  getAllThingies() {
    this._httpService.getTasks()
    .subscribe(data => {
      this.all_tasks= data;
      console.log(data)
    });
  }

  showDesc(id: string){
    this._httpService.getDesc(id)
      .subscribe(data => this.desc = data);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }




}

