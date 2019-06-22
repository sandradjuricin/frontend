import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatSidenavModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatSnackBar, MatSnackBarModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjekatComponent } from './components/projekat/projekat.component';
import { SmerComponent } from './components/smer/smer.component';
import { GrupaComponent } from './components/grupa/grupa.component';
import { StudentComponent } from './components/student/student.component';


import { HelpComponent } from './components/core/help/help.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component'


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjekatService } from './services/projekat.service';
import { ProjekatDialogComponent } from './components/dialogs/projekat-dialog/projekat-dialog.component';

import { SmerDialogComponent } from './components/dialogs/smer-dialog/smer-dialog.component';
import { SmerService } from './services/smer.service';

import { StudentDialogComponent } from './components/dialogs/student-dialog/student-dialog.component';
import { StudentService } from './services/student.service';

import { GrupaDialogComponent } from './components/dialogs/grupa-dialog/grupa-dialog.component';
import { GrupaService } from './services/grupa.service';



@NgModule({
  declarations: [
    AppComponent,
    ProjekatComponent,
    SmerComponent,
    GrupaComponent,
    StudentComponent,
    HelpComponent,
    AuthorComponent,
    HomeComponent,
    ProjekatDialogComponent,
    SmerDialogComponent,
    StudentDialogComponent,
    GrupaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule, MatNativeDateModule, MatDatepickerModule,
    MatPaginatorModule, MatSortModule

  ],
  entryComponents:[ProjekatDialogComponent, SmerDialogComponent, GrupaDialogComponent, StudentDialogComponent],
  providers: [ProjekatService, SmerService, GrupaService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }