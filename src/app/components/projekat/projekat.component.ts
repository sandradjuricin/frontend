import { Component, OnInit } from '@angular/core';
//dodato na osnovu vezbi
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//dod 3
import { Projekat } from '../../models/projekat';
import { ProjekatService } from '../../services/projekat.service';

//dod 4
import { MatDialog } from '@angular/material';
import { ProjekatDialogComponent } from '../dialogs/projekat-dialog/projekat-dialog.component';


@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis', 'actions']
  dataSource: Observable<Projekat[]>;

  constructor(public projekatService: ProjekatService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.dataSource = this.projekatService.getAllProjekat();
  }


  
// sve ovo dodato ispod nakon 4
  public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string){
    const dialogRef = this.dialog.open(ProjekatDialogComponent,
                                      {data: {id: id, naziv: naziv, oznaka: oznaka, opis: opis}}
    );

    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
        this.loadData();
      }    
    })
  }



}
