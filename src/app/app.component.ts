import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-poc';
  spinner = false;
  loadData(){
    this.spinner = true;
    setTimeout(()=>{
      this.spinner = false;
    },5000);
  }
}
