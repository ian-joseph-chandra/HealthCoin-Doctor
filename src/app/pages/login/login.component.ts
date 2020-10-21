import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {RouterService} from '../../services/router/router.service';
import {CookieService} from 'ngx-cookie-service';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail = '';
  inputPass = '';

  showPassword = false;
  requestSent = false;

  error: boolean;
  userId: string;
  message: string;

  md5 = new Md5();

  constructor(
    public router: RouterService,
    private api: ApiService,
    private cookieService: CookieService) {
  }

  async ngOnInit() {
  }

  /**
   * Start login activity and check error to go to home page.
   */
  async login() {
    await this.sendLoginData();

    // If not error, go to home page
    if (!this.error) {
      this.cookieService.set('doctor_id', this.userId);
      await this.router.goToHomePage();
    }
  }

  /**
   * Toggle for showing or hiding password.
   */
  showPasswordToggle(): void {
    this.showPassword = !this.showPassword;
    const passFillType = document.getElementById('password');

    if (this.showPassword) {
      // @ts-ignore
      passFillType.type = 'text';
    } else {
      // @ts-ignore
      passFillType.type = 'password';
    }
  }

  /**
   * Send the login data to API server and get the response. Set the error status and message according to the response.
   */
  async sendLoginData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Create JSON data of login information.
    const JSON = {
      email: this.inputEmail,
      pass: this.md5.appendStr(this.inputPass).end()
    };

    // Send the data to the API server & store the response.
    const response = await this.api.sendPostRequest('doctor-login', JSON);

    console.log(response);

    this.error = response.error;
    if (this.error) {
      this.message = response.message;
    } else {
      this.userId = response.data.user_id;
    }
  }
}
