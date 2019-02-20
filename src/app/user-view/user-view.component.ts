import { Component, OnInit } from '@angular/core';
import { Can } from '../cans/can';
import { CansService } from '../cans/cans.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  private canView: Can[] = [];

  private selectedCans: number;

  constructor(private canService: CansService) { }

  ngOnInit() {
    this.canView = this.canService.getCurrentStock()
  }

}
