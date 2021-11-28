import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'daily',
        loadChildren: () => import('../daily/daily.module').then( m => m.DailyPageModule)
      },
      {
        path: 'medicine',
        loadChildren: () => import('../medicine/medicine.module').then( m => m.MedicinePageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../add/add.module').then( m => m.AddPageModule)
      },
      {
        path: 'appointment',
        loadChildren: () => import('../appointment/appointment.module').then( m => m.AppointmentPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('../more/more.module').then( m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/daily',
        pathMatch: 'full'
      }
    
  ]
  },
  {
    path: '',
    redirectTo: '/tabs/daily',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
