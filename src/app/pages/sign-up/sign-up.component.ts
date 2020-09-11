import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  inputFirstName = 'Ian';
  inputLastName = 'Joseph';
  inputBirthDate = '1998-04-22';
  inputEmail = 'ianjoseph.project@gmail.com';
  inputPhoneNumber = '81513127900';
  inputPass = 'ian2204';
  inputPassConfirm = 'ian2204';
  inputNationalId = '12345';

  /*inputFirstName = '';
  inputLastName = '';
  inputBirthDate = '';
  inputEmail = '';
  inputPhoneNumber = '';
  inputPass = '';
  inputPassConfirm = '';
  inputNationalId = '';*/

  requestSent = false;
  error = false;
  message: string;
  
  constructor(
    public router: RouterService,
    private api: ApiService) {
  }

  ngOnInit(): void {
  }

  /**
   * Check the password confirmation is correct or not. If it's correct, then process the register data.
   */
  async signUp() {
    if (this.inputPass !== this.inputPassConfirm) {
      this.error = true;
      this.message = 'Konfirmasi password tidak sesuai!';
    } else {
      await this.sendRegisterData();

      // If the request is sent and there isn't any error, then go back to Login page.
      if (this.requestSent && !this.error) {
        await this.router.goToLoginPage();
      }
    }
  }

  /**
   * Send the register data to API server and get the response. Set the error status and message according to the response.
   */
  async sendRegisterData() {
    // Set status for requestSent.
    this.requestSent = true;

    // Prepare the JSON data to be parsed to API Server
    const registerJSON = {
      first_name: this.inputFirstName,
      last_name: this.inputLastName,
      birth_date: this.inputBirthDate,
      email: this.inputEmail,
      phone_number: this.inputPhoneNumber,
      pass: this.inputPass,
      national_id: this.inputNationalId
    };

    // Send the data to the API server & store the response.
    const registerResponse = await this.api.sendPostRequest('user-register', registerJSON);

    this.error = registerResponse.error;
    this.message = registerResponse.message;
  }
}
