import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ImportDataComponent } from './components/import-data/import-data.component';
import { SectorsAdministrationComponent } from './components/sectors-administration/sectors-administration.component';
// import { DashboardFilterComponent } from './components/dashboard-filter/dashboard-filter.component';
import { StudentsManagerComponent } from './components/students-manager/students-manager.component';
import { VisualizeComponent } from './components/visualize/visualize.component';
import { ErrorComponent } from './components/error/error.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'importData', component: ImportDataComponent },
  { path: 'sectorsAdministration', component: SectorsAdministrationComponent },
  { path: 'studentsManager', component: StudentsManagerComponent },
  { path: 'visualize', component: VisualizeComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
