import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  all_tasks :any;

constructor(private _httpService: HttpService ){
  _httpService.addTask({title:'test2666',description:'test1666'}).subscribe(data => console.log(data))
  _httpService.getTasks().subscribe(data =>
    {
      this.all_tasks = data;
    })
    

}



}

