import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-app1-components',
  templateUrl: './app1-components.component.html',
  styleUrls: ['./app1-components.component.css']
})
export class App1ComponentsComponent implements OnInit {
  userForm: FormGroup;
  entername!: string;
  @Input()
  parentName!: String;
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(private http: HttpClient) {
    this.userForm = new FormGroup({
      'userid': new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  onInputChange(event: string): void {

    this.onNameChange.emit(event);
  }
}
