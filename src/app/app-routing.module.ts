import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RecordListComponent} from './pages/record-list/record-list.component';
import {WriteRecordComponent} from "./pages/write-record/write-record.component";
import {ReadRecordComponent} from "./pages/read-record/read-record.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'record-list', component: RecordListComponent},
  {path: 'write-record', component: WriteRecordComponent},
  {path: 'read-record', component: ReadRecordComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
