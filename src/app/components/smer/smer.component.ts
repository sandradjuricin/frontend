import { Component, OnInit, ViewChild  } from '@angular/core';

import { Smer } from '../../models/smer';
import { SmerService } from '../../services/smer.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SmerDialogComponent } from '../dialogs/smer-dialog/smer-dialog.component';

@Component({
  selector: 'app-smer',
  templateUrl: './smer.component.html',
  styleUrls: ['./smer.component.css']
})
export class SmerComponent implements OnInit {
  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource: MatTableDataSource<Smer>;

  constructor(public smerService: SmerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();

  }
  public loadData() {
    this.smerService.getAllSmer().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  public openDialog(flag: number, id: number, naziv: string, oznaka: string) {
    const dialogRef = this.dialog.open(SmerDialogComponent, { data: { id: id, naziv: naziv, oznaka: oznaka } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }
} 


