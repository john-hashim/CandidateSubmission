import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {BottomsheetComponent} from './bottomsheet/bottomsheet.component'
import { MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectionModel} from '@angular/cdk/collections';
import {MatIconModule} from '@angular/material/icon';

import { ViewChild } from '@angular/core'

export interface TableContent {
  name:string,
  employeeid:string
  email:string,
  department:string,
  doj:string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'har';
  n:number=0;
  displayedColumns: string[] = ['name','employeeid', 'email', 'department', 'doj','remove'];

  list:TableContent[]=[]
  
  
  dataSource =new MatTableDataSource(this.list);
  constructor(private bottomSheet: MatBottomSheet) {

  }
  openBottomSheet(){
    let sheet=this.bottomSheet.open(BottomsheetComponent)

    sheet.afterDismissed().subscribe((user)=>{
      console.log(user)
      if(user.name!=null){
        this.dataSource.data.push(user);
        this.dataSource.filter = "";
      }

    
     
    }); 

  }

  removeAt(i){
    const data = this.dataSource.data;
    this.dataSource.data.splice(i,1);
    this.dataSource.data = data;

  }

}
