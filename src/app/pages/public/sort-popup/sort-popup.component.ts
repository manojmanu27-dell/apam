import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sort-popup',
  templateUrl: './sort-popup.component.html',
  styleUrls: ['./sort-popup.component.css']
})
export class SortPopupComponent {
  sortOrder: any;
  
  constructor(private matDialogRef: MatDialogRef<SortPopupComponent>) {
  }

  setSortOrder() {
    console.log("the sort order is", this.sortOrder)
  }

}
