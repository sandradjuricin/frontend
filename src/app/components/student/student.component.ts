import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { Smer } from '../../models/smer';
import { Grupa } from '../../models/grupa';
import { Projekat } from '../../models/projekat';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
 selector: 'app-student',
 templateUrl: './student.component.html',
 styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'grupa', 'projekat', 'actions'];
 dataSource: MatTableDataSource<Student>;

 @Input() selektovanaGrupa: Grupa;

 @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
 @ViewChild(MatSort,{static:true}) sort: MatSort;

 constructor(public studentService: StudentService, public dialog: MatDialog) { }

 ngOnInit() {

 }

 ngOnChanges() {
   if (this.selektovanaGrupa.id) {
     this.loadData();
   }
 }

 public loadData() {
  this.studentService.getStudente(this.selektovanaGrupa.id)
.subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
     //pretraga po nazivu ugnježdenog objekta
     this.dataSource.filterPredicate = (data, filter: string) => {
       const accumulator = (currentTerm, key) => {
         return key === 'projekat' ? currentTerm + data.projekat.naziv : currentTerm + data[key];
       };
       const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
       const transformedFilter = filter.trim().toLowerCase();
       return dataStr.indexOf(transformedFilter) !== -1;
     };

      //sortiranje po nazivu ugnježdenog objekta
      this.dataSource.sortingDataAccessor = (data, property) => {
       switch(property) {
         case 'projekat': return data.projekat.naziv.toLocaleLowerCase();
         default: return data[property];
       }
     };

     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   });

}

 public openDialog(flag: number, id: number, ime: string, prezime: string, brojIndeksa: string, grupa: Grupa, projekat: Projekat) {
   const dialogRef = this.dialog.open(StudentDialogComponent, {
     data: {
       i: id, id: id, ime: ime, prezime: prezime, brojIndeksa: brojIndeksa, grupa: grupa, projekat: projekat
     }
   });
   dialogRef.componentInstance.flag = flag;
   if (flag == 1)
     dialogRef.componentInstance.data.grupa = this.selektovanaGrupa;

   dialogRef.afterClosed().subscribe(result => {
     if (result == 1)
       this.loadData();
   });
 }

 applyFilter(filterValue: string){
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}
}