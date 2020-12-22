import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { AjoutPromoComponent } from './ajout-promo/ajout-promo.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GestionDonneesComponent } from './gestion-donnees/gestion-donnees.component';
import { GestionListesComponent } from './gestion-listes/gestion-listes.component';
import { SelectionGroupeComponent } from './selection-groupe/selection-groupe.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const oktaConfig = {
  issuer: 'https://dev-787383.okta.com',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa15thpj5PkVpj6F357'
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'connexion',component: ConnexionComponent, pathMatch: 'full'},
  {path: 'tableau-de-bord', component: TableauDeBordComponent},
  {path: 'ajoutPromo',component: AjoutPromoComponent},
  {path: 'gestion-donnees',component: GestionDonneesComponent},
  {path: 'gestion-listes',component: GestionListesComponent},
  {path: 'selection-groupe',component: SelectionGroupeComponent},
  {path: 'visualisation',component: VisualisationComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(oktaConfig),
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
