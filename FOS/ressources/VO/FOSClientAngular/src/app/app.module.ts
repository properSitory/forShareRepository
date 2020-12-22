import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { MzButtonModule, MzInputModule, MzValidationModule } from 'ngx-materialize';

import { AjoutPromoComponent } from './ajout-promo/ajout-promo.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GestionDonneesComponent } from './gestion-donnees/gestion-donnees.component';
import { GestionListesComponent } from './gestion-listes/gestion-listes.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { SelectionGroupeComponent } from './selection-groupe/selection-groupe.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { VisualisationComponent } from './visualisation/visualisation.component';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';


import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import '../polyfills';
import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HomeComponent } from './home/home.component';

const oktaConfig = {
  issuer: 'https://dev-787383.okta.com',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa15thpj5PkVpj6F357'
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'tableau-de-bord', component: TableauDeBordComponent, canActivate:[OktaAuthModule]},
  {path: 'ajoutPromo',component: AjoutPromoComponent, canActivate:[OktaAuthModule]},
  {path: 'gestion-donnees',component: GestionDonneesComponent, canActivate:[OktaAuthModule]},
  {path: 'gestion-listes',component: GestionListesComponent, canActivate:[OktaAuthModule]},
  {path: 'selection-groupe',component: SelectionGroupeComponent, canActivate:[OktaAuthModule]},
  {path: 'visualisation',component: VisualisationComponent, canActivate:[OktaAuthModule]},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    AjoutPromoComponent,
    ConnexionComponent,
    GestionDonneesComponent,
    GestionListesComponent,
    MenuNavComponent,
    SelectionGroupeComponent,
    TableauDeBordComponent,
    VisualisationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MzButtonModule,
    MzInputModule,
    MatCheckboxModule,
    MzValidationModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(oktaConfig),
    MatNativeDateModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { };
platformBrowserDynamic().bootstrapModule(AppModule);
