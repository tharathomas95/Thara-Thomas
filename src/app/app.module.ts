import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaService } from './services/formula.service';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { RouterModule } from '@angular/router';
import { SeasonWinnerComponent } from './components/season-winner/season-winner.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchNamePipe } from './search-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SeasonDetailsComponent,
    SeasonWinnerComponent,
    SearchNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModalModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [FormulaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
