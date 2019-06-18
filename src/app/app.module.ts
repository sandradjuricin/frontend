import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmerComponent } from './components/smer/smer.component';
import { ProjekatComponent } from './components/projekat/projekat.component';
import { GrupaComponent } from './components/grupa/grupa.component';
import { StudentComponent } from './components/student/student.component';

import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';

import { SmerDialogComponent } from './components/dialogs/smer-dialog/smer-dialog.component';
import { SmerService } from './services/smer.service';

//import { GrupaDialogComponent } from './components/dialogs/grupa-dialog/grupa-dialog.component';
//import { GrupaService } from './services/grupa.service';



import {MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatDialogModule, MatInputModule} from '@angular/material';
//dodato s vezbi
import { HttpClientModule } from '@angular/common/http';
import { ProjekatService } from './services/projekat.service';

//dod 4
import { ProjekatDialogComponent } from './components/dialogs/projekat-dialog/projekat-dialog.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    SmerComponent,
    ProjekatComponent,
    GrupaComponent,
    StudentComponent,
    HelpComponent,
    AuthorComponent,
    HomeComponent,
    SmerDialogComponent,
    //GrupaDialogComponent,
    ProjekatDialogComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    //dodato 
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,

    //dod 4
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  //dod 4
  entryComponents:[ProjekatDialogComponent,SmerDialogComponent],
  //dodat servis
  providers: [ProjekatService,SmerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
