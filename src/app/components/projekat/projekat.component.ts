import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//dod 3
import { Projekat } from '../../models/projekat';
import { ProjekatService } from '../../services/projekat.service';

//dod 4
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog.component';
import {MatSortModule} from '@angular/material'; 


@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis', 'actions']
  dataSource: MatTableDataSource<Projekat>;

  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor(public httpClient: HttpClient, public projekatService: ProjekatService, public dialog: MatDialog) { }


  ngOnInit() {
    this.loadData();
  }

  



  

  public loadData() {
    this.projekatService.getAllProjekat().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

  public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string){
    const dialogRef = this.dialog.open(ProjekatDialogComponent,
                                        {data:{id: id, naziv: naziv, oznaka: oznaka, opis: opis}}
    );

    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result =>{
      if (result == 1)
        this.loadData();
    })
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
