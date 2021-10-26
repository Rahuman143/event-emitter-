import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-app2-components',
  templateUrl: './app2-components.component.html',
  styleUrls: ['./app2-components.component.css']
})
export class App2ComponentsComponent implements OnInit {

  userForm:FormGroup;
  constructor(private http: HttpClient) {
    this.userForm = new FormGroup({
      'title': new FormControl(),
    });
  }


  ngOnInit(): void {
  }

}
