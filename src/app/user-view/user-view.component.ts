import { Component, OnInit } from '@angular/core';
import { Can } from '../interfaces/can';
import { RepositoryService } from '../repository/repository.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  canView: Can[] = [];

  selectedCan = 0;

  paymentType = '';

  constructor(private repoService: RepositoryService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.canView = this.repoService.getStock();
  }

  onPurchaseClicked() {
    this.repoService.buyCan(this.selectedCan, this.paymentType);
    this.resetView();
    this.snackBar.open('Enjoy your drink!', 'Dismiss', {
      duration: 2000
    });
  }

  resetView() {
    // setting these values to their defaults will disable the purchase button in the html
    this.selectedCan = 0;
    this.paymentType = '';

    this.canView = this.repoService.getStock();
  }

}
