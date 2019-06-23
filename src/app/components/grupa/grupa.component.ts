import { Component, OnInit, ViewChild } from '@angular/core';
import { GrupaService } from '../../services/grupa.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Grupa } from '../../models/grupa';
import { Observable } from 'rxjs';
import { Smer } from '../../models/smer';
import { GrupaDialogComponent } from '../dialogs/grupa-dialog/grupa-dialog.component';

@Component({
 selector: 'app-grupa',
 templateUrl: './grupa.component.html',
 styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit {
 displayedColumns = ['id', 'oznaka','smer', 'actions'];
 dataSource: MatTableDataSource<Grupa>;
 selektovanaGrupa: Grupa;
 
 @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
 @ViewChild(MatSort,{static:true}) sort: MatSort;

 constructor(public grupaService: GrupaService, public dialog: MatDialog) { }

 ngOnInit() {
   this.loadData();
 }

 public loadData() {
  this.grupaService.getAllGrupa().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);

    //pretraga po nazivu ugnježdenog objekta
    this.dataSource.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return key === 'smer' ? currentTerm + data.smer.naziv : currentTerm + data[key];
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

     //sortiranje po nazivu ugnježdenog objekta
     this.dataSource.sortingDataAccessor = (data, property) => {
      switch(property) {
        case 'smer': return data.smer.naziv.toLocaleLowerCase();
        default: return data[property];
      }
    };
   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });

}

 public openDialog(flag: number, id: number, oznaka: string, smer: Smer ) {
   const dialogRef = this.dialog.open(GrupaDialogComponent, { data: { id: id, oznaka: oznaka, smer: smer  } });
   dialogRef.componentInstance.flag = flag;

   dialogRef.afterClosed().subscribe(result => {
     if (result == 1){ 
        this.loadData();
     }
       
   });
 }

 selectRow(row){
  this.selektovanaGrupa = row;
 }

 applyFilter(filterValue: string){
  filterValue = filterValue.trim();
  filterValue = filterValue.toLocaleLowerCase();
  this.dataSource.filter = filterValue;
}
}