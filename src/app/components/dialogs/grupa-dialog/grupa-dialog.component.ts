// sve dod 5 


 import { Component, OnInit, Inject, ViewChild } from '@angular/core';
 import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';

 import { FormControl, Validators } from '@angular/forms';

 import { MatSnackBar } from '@angular/material';
 import { Smer } from '../../../models/smer';
 import { Grupa } from '../../../models/grupa';
 import { GrupaService } from '../../../services/grupa.service';
 import { SmerService } from '../../../services/smer.service';

 @Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
 })
 export class GrupaDialogComponent implements OnInit {
  smerovi: Smer[];
  public flag: Number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<GrupaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Grupa,
    public grupaService: GrupaService,
    public smerService: SmerService
  ) { }

  ngOnInit() {
    this.smerService.getAllSmer().subscribe(smerovi =>
      this.smerovi = smerovi
    );
  }
  compareTo(a, b) {
    return a.id == b.id;
  }
  onChange(smer) {
    this.data.smer = smer;
  }

  public add(): void {
    this.data.id = -1;
    this.grupaService.addGrupa(this.data);
    this.snackBar.open("Uspesno dodata grupa", "U redu", { duration: 2500 });
  }

  public update(): void {
    this.grupaService.updateGrupa(this.data);
    this.snackBar.open("Uspesno modifikovana grupa", "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.grupaService.deleteGrupa(this.data.id);
    this.snackBar.open("Uspesno obrisana grupa", "U redu", { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
 }

