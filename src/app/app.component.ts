import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-evenemitter-sharedcomponents';
  userForm!: FormGroup;
  array: any;
  map: any;
  name!:string;
  childName!: string;
  ngOnInit() {
    this.getAll()
  }
  constructor(private http: HttpClient) {
    
  }
  getAll() {
    this.http
      .get('https://jsonplaceholder.typicode.com/albums')
      .subscribe((res) => {
        this.array = res;
      });

  }
  update() {
    console.log(this.userForm.getRawValue())
    const add = {
      userId: this.userForm.getRawValue().userid,
      title: this.userForm.getRawValue().title
    };
    this.http
      .put('https://jsonplaceholder.typicode.com/albums', add)
      .subscribe((res: any) => {
        console.log('res', res)

      })
  }
  onChildNameChange(event:string):void{
    
    this.childName=event;
    
  }
}

