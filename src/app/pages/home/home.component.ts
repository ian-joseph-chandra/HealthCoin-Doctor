import {Component, OnInit} from '@angular/core';
import {User} from "../../classes/user/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qrHeight: any;
  qrString: string;
  qrShowed: boolean;

  doctor_info: User;

  constructor() {
    this.doctor_info = new User(1, 'Ian', 'Joseph');
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
}
