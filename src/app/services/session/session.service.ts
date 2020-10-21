import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {RouterService} from '../router/router.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private cookie: CookieService,
    private router: RouterService) {
  }

  async checkSession(){
    const doctor_id = this.cookie.get('doctor_id');
    if (doctor_id === '') {
      await this.router.goToLoginPage();
    } else{
      return this.cookie.get('doctor_id');
    }
  }
}
