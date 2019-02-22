import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Can } from '../interfaces/can';
import { RepositoryService } from '../repository/repository.service';
import { CardPayment } from '../interfaces/card-payment';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  canView: Can[] = [];
  cardLog: CardPayment[] = [];
  cardTotal = 0;
  currentCashHeld = 0;

  constructor(private repoService: RepositoryService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.refreshView();
  }

  onRestockClick() {
    this.repoService.restock();
    this.refreshView();
    this.snackBar.open('Vending Machine Restocked', 'Dismiss', {
      duration: 2000
    });
  }

  refreshView() {
    this.canView = this.repoService.getStock();
    this.cardLog = this.repoService.getCardPaymentLog();
    this.cardTotal = this.repoService.getCardPaymentTotal();
    this.currentCashHeld = this.repoService.getHeldCash();
  }

}
