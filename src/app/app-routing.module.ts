import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'employee-card',
    canActivate: [AuthGuard],
    loadChildren: './employee-card/employee-card.module#EmployeeCardPageModule'
  },
  { path: 'monitoring', loadChildren: './monitoring/monitoring.module#MonitoringPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'employee-card-detail', loadChildren: './employee-card-detail/employee-card-detail.module#EmployeeCardDetailPageModule' },
  { path: 'monitor-detail', loadChildren: './monitor-detail/monitor-detail.module#MonitorDetailPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
