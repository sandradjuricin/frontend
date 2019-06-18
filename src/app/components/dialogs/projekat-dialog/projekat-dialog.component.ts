//dod 4

import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Projekat } from '../../../models/projekat';
import { ProjekatService } from '../../../services/projekat.service';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProjekatDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Projekat,
              public projekatService: ProjekatService
            ) { }

  ngOnInit() {
  }

  public add(){
    this.projekatService.addProjekat(this.data);
    this.snackBar.open("Uspesno dodat projekat: " + this.data.naziv, 
                        "U redu", 
                        {duration: 2000})
  }

  public update(): void {
    this.projekatService.updateProjekat(this.data);
    this.snackBar.open("Uspesno modifikovan projekat: " + this.data.id, "U redu", {
      duration: 2000,
    });
  }

  public delete(): void {
    this.projekatService.deleteProjekat(this.data.id);
    this.snackBar.open("Uspesno obrisan projekat: " + this.data.id, "U redu", {
      duration: 2000,
    });
  }
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", {
      duration: 1000,
    });
  }

}