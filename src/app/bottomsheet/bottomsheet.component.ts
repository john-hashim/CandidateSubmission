import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FlashMessagesService } from 'angular2-flash-messages';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent implements OnInit {
  name:string;
  department:string;
  email:string;
  doj:string;
  employeeid:string
  flag1:number=1;
  flag2:number=1;
  constructor( private validateService:ValidateService,
    private bottomSheetRef: MatBottomSheetRef<BottomsheetComponent>,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    const user={
      name:this.name,
      department:this.department,
      email:this.email,
      doj:this.doj,
      employeeid:this.employeeid
    }
    
    if(!this.validateService.validateField(user)){
      this.flashMessagesService.show('ALL FIELD VALUES ARE REQUIRED');
      this.flag1=0
    }else{
      this.flag1=1
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Email_id IS NOT VALID');
      this.flag2=0
    }else{
      this.flag2=1
    }
    if((this.flag1&&this.flag2)==1){
      this.bottomSheetRef.dismiss(user)
    }
 }
 reset(){
   this.name=undefined;
   this.email=undefined;
   this.department=undefined;
   this.doj=undefined;
   this.employeeid=undefined;
 }

}
