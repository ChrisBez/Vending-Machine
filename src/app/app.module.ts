import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatRadioModule, MatListModule, MatButtonToggleModule, MatSnackBarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CansService } from './cans/cans.service';
import { HeldCashService } from './held-cash/held-cash.service';
import { RepositoryService } from './repository/repository.service';
import { CardPaymentsService } from './card-payments/card-payments.service';

const appRoutes: Routes = [
  { path: 'user', component: UserViewComponent },
  { path: 'admin', component: AdminViewComponent },
  { path: '**', component: UserViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [CansService, HeldCashService, RepositoryService, CardPaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
