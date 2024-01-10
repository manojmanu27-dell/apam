import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-sort-popup',
  templateUrl: './sort-popup.component.html',
  styleUrls: ['./sort-popup.component.css']
})
export class SortPopupComponent {
  sortOrder: any;

  constructor(private dialogRef: MatDialogRef<SortPopupComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
    this.sortOrder = this.data.type;
  }

  setSortOrder() {
    console.log("the sort order is", this.sortOrder);
    setTimeout(()=>{
      this.dialogRef.close(this.sortOrder)
    },200)
  }

}
