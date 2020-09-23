import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Record} from '../../model/record/record';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(public router: Router) {
  }

  async goToLoginPage() {
    await this.router.navigate(['login']);
  }

  async goToSignUpPage() {
    await this.router.navigate(['sign-up']);
  }

  async goToHomePage() {
    await this.router.navigate(['home']);
  }

  async goToRecordListPage() {
    await this.router.navigate(['record-list']);
  }

  async goToReadRecordPage(record: Record) {
    await this.router.navigate(['read-record'], {state: {data: record}} );
  }

  async goToWriteRecordPage() {
    await this.router.navigate(['write-record']);
  }
}
