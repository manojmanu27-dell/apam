import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  selected: string = 'recommended';

  ngOnInit(): void {

  }

  sortBy() {
    console.log("the selected option is", this.selected)
  }
}
