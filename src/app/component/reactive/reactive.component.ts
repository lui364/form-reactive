import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  login = new FormGroup({
    name: new FormControl("",Validators.required),
    lastName: new FormControl("",[Validators.required,Validators.minLength(5)]),
    email: new FormControl("",[Validators.email,Validators.required]),
    age: new FormControl("",Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSaved(){
      if (this.login.valid == true){
          
        console.log(this.login.value);
      }else{
        console.log("FORMULARIO NO VALIDO");
      }
  }
}
