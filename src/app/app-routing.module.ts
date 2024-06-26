import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenExchangeComponent } from './pages/token-exchange/token-exchange.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { BrowserModule } from '@angular/platform-browser';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  {path: "", component: TokenExchangeComponent},
  {path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [
    TokenExchangeComponent,
    TermsComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
