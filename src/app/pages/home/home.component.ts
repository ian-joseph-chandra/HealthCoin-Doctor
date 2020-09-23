import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/user';
import {UserFactory} from '../../factory/user/user-factory';
import {ApiService} from '../../services/api/api.service';
import {RouterService} from '../../services/router/router.service';
import {sha256} from 'js-sha256';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qrHeight: any;
  qrString: string;
  qrShowed: boolean;
  userId = 2;
  doctor: User;

  constructor(
    private api: ApiService,
    private router: RouterService,
    private cookieService: CookieService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getDoctorData();

    this.qrHeight = window.innerHeight * 0.37;
    this.qrShowed = false;
  }

  resizeQrCode() {
    this.qrHeight = window.innerHeight * 0.37;
    document.getElementsByTagName('qrcode')[0].setAttribute('width', this.qrHeight);
  }

  async toggleQrCode() {
    this.qrShowed = !this.qrShowed;
    document.getElementById('qr-code').style.display = this.qrShowed ? 'block' : 'none';

    if (this.qrShowed) {
      await this.updateQrCode();
    }
  }

  async getDoctorData() {
    const homeJSON = {
      user_id: this.userId
    };

    // Send the data to the API server & store the response.
    const response = await this.api.sendPostRequest('doctor-home', homeJSON);

    this.doctor = UserFactory.homePage(this.userId, response.data.first_name, response.data.last_name);
  }

  async requestRecordAccess() {
    const JSON = {
      token_access: this.qrString
    };

    const response = await this.api.sendPostRequest('request-access', JSON);

    if (response['get-access'] === true) {
      this.cookieService.set('patient_id', response.data.patient_id);
      await this.router.goToRecordListPage();
    }
  }

  createDoctorToken() {
    const str = this.doctor.user_id + Date.now().toString();
    this.qrString = sha256(str);
  }

  async updateQrCode() {
    for (let i = 0; i < 5; i++) {
      this.createDoctorToken();

      for (let j = 0; j < 12; j++) {
        if (this.qrShowed) {
          await this.delay(5000);
          await this.requestRecordAccess();
        } else {
          break;
        }
      }

      if (!this.qrShowed) {
        break;
      }
    }

    if (this.qrShowed) {
      await this.toggleQrCode();
    }
  }

  delay(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }
}
