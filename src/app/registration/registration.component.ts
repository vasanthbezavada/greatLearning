import { Component, OnInit } from '@angular/core';
import{Person} from '../person'
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  person: Person = new Person();
  constructor(private ser:UserRegistrationService) { }
  person_result: Person = new Person();
  sucessMessage="";

  ngOnInit(): void {
  }
  registerNow(){
    console.log("asdasd");
    this.ser.doRegistration(this.person)
     .subscribe(data => {console.log(data);this.person_result=data;this.sucessMessage="The user "+this.person_result.userName+" has been inserted";}, error => console.log(error));
     this.person= new Person();

  }

}
