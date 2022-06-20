import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { Person } from '../person';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  personList:any;
  visible:boolean=false
  person: Person=new Person();
  constructor(private serv:  UserRegistrationService) { }

  ngOnInit(): void {
    this.serv.getAllPersons().subscribe(data=>this.personList=data,error=>console.log(error));  
  }
  delete(id){
    console.log(id);
    this.serv.deletePerson(id).subscribe(data=>{console.log(data);this.ngOnInit();},error=>console.log(error));  
  }
  change(obj){
    this.person=obj;
    this.visible=true;
  }
  edited(){
    
    this.visible=false;
    this.serv.doRegistration(this.person)
     .subscribe(data=>console.log(data));
     this.ngOnInit();
     this.visible=false;
  }

}
