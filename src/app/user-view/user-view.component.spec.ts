import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewComponent } from './user-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatRadioModule, MatButtonToggleModule, MatCardModule } from '@angular/material';
import { RepositoryService } from '../repository/repository.service';

describe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;
  let repoService: RepositoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ RepositoryService ],
      declarations: [ UserViewComponent ],
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
    fixture = TestBed.createComponent(UserViewComponent);
    repoService = TestBed.get(RepositoryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unselect can and payment type when ResetView called', () => {
    component.paymentType = 'test';
    component.selectedCan = 99;

    component.resetView();

    expect(component.paymentType).toEqual('');
    expect(component.selectedCan).toEqual(0);
  });

  it('should call getStock() from repo service when ResetView called', () => {
    spyOn(repoService, 'getStock').and.callThrough();

    component.resetView();

    expect(repoService.getStock).toHaveBeenCalled();
  });

  it('should call buyCan() from repo service when purchaseCan called', () => {
    spyOn(repoService, 'buyCan').and.callThrough();

    component.selectedCan = 1;
    component.paymentType = 'cash';

    component.onPurchaseClicked();

    expect(repoService.buyCan).toHaveBeenCalled();
  });

  it('should call getStock() from repo service when ResetView called', () => {
    spyOn(repoService, 'getStock').and.callThrough();

    component.resetView();

    expect(repoService.getStock).toHaveBeenCalled();
  });

});
