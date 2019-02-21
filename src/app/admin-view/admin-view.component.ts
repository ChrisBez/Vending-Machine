import { Component, OnInit } from '@angular/core';
import { Can } from '../interfaces/can';
import { RepositoryService } from '../repository/repository.service';
import { CardPayment } from '../interfaces/card-payment';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  private canView: Can[] = [];
  private cardLog: CardPayment;
  private currentCashHeld: number;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.canView = this.repoService.getStock();
  }

}
