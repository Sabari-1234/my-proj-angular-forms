import { Component, AfterViewChecked,ChangeDetectorRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from './user';
import { Form1Service } from './form1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewChecked {
 hasError=true
 title='my-proj'
  interests=['angular','react','view']
  

  users=new User('sabari','sanananan@gmail.com',12121212,'default','angular',true)


  constructor(private readonly changeDetectorRef: ChangeDetectorRef,private form1:Form1Service) {}

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  validate=(value:string)=>{
       if(value=='default'){
        this.hasError=true

        console.log('true')
       }
       else{
        this.hasError=false
        console.log('false')
       }
  }
  onsubmit=()=>{
    this.form1.enroll(this.users)
    .subscribe(
      data=>console.log(data),
      error=>console.error(error)
    )
  }
  
}
