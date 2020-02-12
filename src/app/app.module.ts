import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatExpansionModule,
  MatTabsModule,
  MatTableModule
 } from '@angular/material';

import { ListArbresComponent } from './list-arbres/list-arbres.component';
import { ArbreComponent } from './list-arbres/arbre/arbre.component';
import { DetailArbreComponent } from './list-arbres/detail-arbre/detail-arbre.component';
import { ModifierArbreComponent, DeleteDialogComponent, SaveDialogComponent } from './list-arbres/modifier-arbre/modifier-arbre.component';
import { NouveauArbreComponent } from './nouveau-arbre/nouveau-arbre.component';

const appRoutes: Routes = [
  {path: '', component: ListArbresComponent},
  {path: 'details/:id', component: DetailArbreComponent},
  {path: 'modifier/:id', component: ModifierArbreComponent},
  {path: 'nouveau', component: NouveauArbreComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListArbresComponent,
    ArbreComponent,
    DetailArbreComponent,
    ModifierArbreComponent,
    SaveDialogComponent,
    DeleteDialogComponent,
    NouveauArbreComponent
  ],
  entryComponents: [
    SaveDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
