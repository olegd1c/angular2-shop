import { Routes }     from '@angular/router';
import { ProfileEdit }      from '../profile-edit/profile_edit.component';
import { ProfileShow }      from '../profile-show/profile_show.component';
import { ProfileComponent } from './profile.component';
import { HistoryComponent } from '../history/history.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';

export const ProfileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'edit',  component: ProfileEdit },      
      { path: '',     component: ProfileShow }
    ]
  }
  ,{ path: 'history',  component: HistoryComponent }
  ,{path: 'orders/:orderId', component: OrderDetailsComponent}
];
