import { Component } from '@angular/core';
import { NgScormPlayerService, NgScormPlayerConfig, NgScormPlayerComponent } from 'ng-scorm-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // declarations
  title = 'lms-scorm';
  public courseUrl = '../assets/LMS/scorm2004';

  constructor(
    private scormApiService: NgScormPlayerService
  ) { }

  getData() {
    const getData = this.scormApiService.scormResult;
    console.log('getData...');
    console.log(getData);
    console.log('getData...');
  }

  setData() {
    // this.scormApiService.SetValue();
  }

  navegations() {
    // steps to program to navigate the scorm course
    // this.scormApiService.SetValue();
  }
}
