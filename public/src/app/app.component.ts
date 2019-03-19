import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  all_tasks :any;
  num:number;

  constructor(private _httpService: HttpService ){}

  ngOnInit() {
    this.getAllThingies();
    this.num = 7;
  }

  addThing() {
    console.log("clicked");
    this._httpService.addTask({title:'test2666',description:'test1666'})
    .subscribe(data => {
      console.log(data);
      this.getAllThingies();
    });

  }

  getAllThingies() {
    this._httpService.getTasks()
    .subscribe(data => {
      this.all_tasks= data;
    });
  }






}

