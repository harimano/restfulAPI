import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showDetails = false;
  title = 'app';
  all_tasks :any;
  num:number;
  desc:any;

  constructor(private _httpService: HttpService ){}

  ngOnInit() {
    // this.getAllThingies();
    // this.num = 7;
  }

  addThing() {
    console.log("clicked");
    this._httpService.addTask({title:'Build Rocket',description:'build a better rocket than SpaceX'})
    .subscribe(data => {
      console.log(data);
      this.getAllThingies();
    });

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

