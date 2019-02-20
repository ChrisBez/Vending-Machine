import { Component, OnInit } from '@angular/core';
import { Can } from '../cans/can';
import { CansService } from '../cans/cans.service';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';
import { restoreView } from '@angular/core/src/render3';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private canView: Can[] = [];

  private selectedCan: number = 0;

  private paymentType: string = "";

  constructor(private canService: CansService) { }

  ngOnInit() {
    this.canView = this.canService.getCurrentStock();
  }

  purchaseCan() {
    this.canService.buyCan(this.selectedCan, this.paymentType);
    this.canView = this.canService.getCurrentStock();
    this.resetView();
  }

  resetView(){
    this.selectedCan = 0;
    this.paymentType = "";
  }

}
