import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';

import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { Projekat } from '../../../models/projekat';
import { ProjekatService } from '../../../services/projekat.service';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {
  projekti: Projekat[];
  public flag: Number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    public studentService: StudentService,
    public projekatService: ProjekatService
  ) { }


  ngOnInit() {
    this.projekatService.getAllProjekat().subscribe(projekti =>
      this.projekti = projekti
    );
  }

  public add(): void {
    this.data.id = -1;
    this.studentService.addStudent(this.data);
    this.snackBar.open("Uspešno dodata stavka porudžbine", "U redu", { duration: 2500 });
  }

  public update(): void {
    this.studentService.updateStudent(this.data);
    this.snackBar.open("Uspešno modifikovana stavka porudžbine", "U redu", { duration: 2500 });
  }

  public delete(): void {
    this.studentService.deleteStudent(this.data.id);
    this.snackBar.open("Uspešno obrisana stavka porudžbine", "U redu", { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }

  compareTo(a, b) {
    return a.id == b.id;
  }
}