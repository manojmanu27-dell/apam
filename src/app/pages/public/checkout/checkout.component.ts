import { SharedService } from '../../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.items = Object.values(this.sharedService.bagItems)
    if (this.items.length > 0) {
      this.items = this.items.map(obj => JSON.parse(obj))
    }
    // this.items = this.sharedService.bagItems;
    console.log("The bag items are", this.items);
  }

  selectSize() {
    console.log("this is selected eventhough disabled")
  }

  removeFromBag(id: any) {
    this.sharedService.removeItem(id);
  }
}
