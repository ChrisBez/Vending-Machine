import { Component, OnInit } from '@angular/core';
import { Can } from '../interfaces/can';
import { RepositoryService } from '../repository/repository.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private canView: Can[] = [];

  private selectedCan: number = 0;

  private paymentType: string = "";

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.canView = this.repoService.getStock();
  }

  purchaseCan() {
    this.repoService.buyCan(this.selectedCan, this.paymentType);
    this.canView = this.repoService.getStock();
    this.resetView();
  }

  resetView(){
    //setting these values to the default will disable the purchase button in the html
    this.selectedCan = 0;
    this.paymentType = "";
  }

}
