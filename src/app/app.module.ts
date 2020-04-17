import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'
import {MatTableModule} from '@angular/material/table'; 

import {MatPaginator} from '@angular/material/paginator'; 
import { MatTable } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BottomsheetComponent,
  ],
  imports: [
    MatIconModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomsheetComponent],
  exports:[MatBottomSheetModule,MatTableModule]
  
})
export class AppModule { }
