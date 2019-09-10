import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'employee-card',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../employee-card/employee-card.module').then(m => m.EmployeeCardPageModule)
          }
        ]
      },
      {
        path: 'monitoring',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../monitoring/monitoring.module').then(m => m.MonitoringPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/employee-card',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/employee-card',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
