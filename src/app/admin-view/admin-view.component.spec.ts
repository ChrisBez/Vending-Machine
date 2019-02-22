import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponent } from './admin-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatRadioModule, MatButtonToggleModule, MatCardModule } from '@angular/material';
import { RepositoryService } from '../repository/repository.service';

describe('AdminViewComponent', () => {
  let component: AdminViewComponent;
  let fixture: ComponentFixture<AdminViewComponent>;
  let repoService: RepositoryService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ RepositoryService ],
      declarations: [ AdminViewComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatListModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewComponent);
    repoService = TestBed.get(RepositoryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call restock() from repo service when onRestockClick called', () => {
    spyOn(repoService, 'restock').and.callThrough();

    component.onRestockClick();

    expect(repoService.restock).toHaveBeenCalled();

  });

  it('should call the data collectors from repo service when onRestockClick called', () => {
    spyOn(repoService, 'getStock').and.callThrough();
    spyOn(repoService, 'getCardPaymentLog').and.callThrough();
    spyOn(repoService, 'getCardPaymentTotal').and.callThrough();
    spyOn(repoService, 'getHeldCash').and.callThrough();

    component.onRestockClick();

    expect(repoService.getStock).toHaveBeenCalled();
    expect(repoService.getCardPaymentLog).toHaveBeenCalled();
    expect(repoService.getCardPaymentTotal).toHaveBeenCalled();
    expect(repoService.getHeldCash).toHaveBeenCalled();

  });
});
