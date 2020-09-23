import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/user';
import {UserFactory} from '../../factory/user/user-factory';
import {ApiService} from '../../services/api/api.service';

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

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.qrString = 'htttp://localhost:4200/home';
    this.qrHeight = window.innerHeight * 0.37;
    this.qrShowed = false;
  }

  resizeQrCode() {
    this.qrHeight = window.innerHeight * 0.37;
    document.getElementsByTagName('qrcode')[0].setAttribute('width', this.qrHeight);
  }

  toggleQrCode() {
    this.qrShowed = !this.qrShowed;
    document.getElementById('qr-code').style.display = this.qrShowed ? 'block' : 'none';
  }

  async sendLoginData() {
    const homeJSON = {
      user_id: this.userId
    };

    // Send the data to the API server & store the response.
    const response = await this.api.sendPostRequest('doctor-home', homeJSON);

    this.doctor = UserFactory.homePage(this.userId, response.data.first_name, response.data.last_name);
  }
}
