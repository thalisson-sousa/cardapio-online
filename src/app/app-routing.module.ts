import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PayGoogleComponent } from './components/pay-google/pay-google.component';
import { OrderComponent } from './components/order/order.component';
import { PainelComponent } from './pages/painel/painel.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  {path: 'painel', component: PainelComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
