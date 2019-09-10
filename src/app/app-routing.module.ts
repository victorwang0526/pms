import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'employee-card', loadChildren: './employee-card/employee-card.module#EmployeeCardPageModule' },
  { path: 'monitoring', loadChildren: './monitoring/monitoring.module#MonitoringPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'employee-card-detail', loadChildren: './employee-card-detail/employee-card-detail.module#EmployeeCardDetailPageModule' },
  { path: 'monitor-detail', loadChildren: './monitor-detail/monitor-detail.module#MonitorDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
