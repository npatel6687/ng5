import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.scss']
})
export class HelloUserComponent implements OnInit {
  firstName: string;
  lastName: string;
  btnText: string='Say Hello!';
  fullName: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  addName(){
    this.fullName = 'Hello ' + this.firstName + ' ' +this.lastName;
  }
}
