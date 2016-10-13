import { Component }         from '@angular/core';
import { Auth }              from '../auth/auth.service';

@Component({
  selector: 'profile_show',
  templateUrl: './profile_show.template.html'
})

export class ProfileShow {
  constructor(private auth: Auth) {}
};
