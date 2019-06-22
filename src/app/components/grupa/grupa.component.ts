import { Component, OnInit } from '@angular/core';
import { GrupaService } from '../../services/grupa.service';
import { MatDialog } from '@angular/material';
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
 displayedColumns = ['id', 'oznaka', 'smer', 'actions'];
 dataSource: Observable<Grupa[]>;
 selektovanaGrupa: Grupa;

 constructor(public grupaService: GrupaService, public dialog: MatDialog) { }

 ngOnInit() {
   this.loadData();
 }

 public loadData() {
   this.dataSource = this.grupaService.getAllGrupa();
 }

 public openDialog(flag: number, id: number, oznaka: string, smer: Smer ) {
   const dialogRef = this.dialog.open(GrupaDialogComponent, { data: { id: id, oznaka: oznaka, smer: smer  } });
   dialogRef.componentInstance.flag = flag;
   console.log("objekat? "+smer);

   dialogRef.afterClosed().subscribe(result => {
     if (result == 1)
       this.loadData();
   });
 }

 selectRow(row){
  this.selektovanaGrupa = row;
 }
}