import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user/user';
import {UserFactory} from '../../factory/user/user-factory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qrHeight: any;
  qrString: string;
  qrShowed: boolean;
  userId: number;
  doctor: User;

  constructor() {
  }

  ngOnInit(): void {
    this.qrString = 'htttp://localhost:4200/home';
    this.qrHeight = window.innerHeight * 0.37;
    this.qrShowed = false;

    this.userId = 2;

    this.doctor = UserFactory.userHomePage(this.userId, 'Ian', 'Joseph');
  }

  resizeQrCode() {
    this.qrHeight = window.innerHeight * 0.37;
    document.getElementsByTagName('qrcode')[0].setAttribute('width', this.qrHeight);
  }

  toggleQrCode() {
    this.qrShowed = !this.qrShowed;
    document.getElementById('qr-code').style.display = this.qrShowed ? 'block' : 'none';
  }
}
