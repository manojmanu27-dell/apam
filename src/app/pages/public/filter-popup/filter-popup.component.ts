import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css']
})
export class FilterPopupComponent {
  constructor(private dialogRef: MatDialogRef<FilterPopupComponent>) { }
  closeFilter() {
    this.dialogRef.close();
  }
}
