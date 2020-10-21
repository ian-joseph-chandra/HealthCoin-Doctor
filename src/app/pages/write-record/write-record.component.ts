import {Component, OnInit} from '@angular/core';
import {RouterService} from '../../services/router/router.service';
import {ApiService} from '../../services/api/api.service';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from '../../services/session/session.service';
import {Hospital} from '../../model/hospital/hospital';
import {HospitalFactory} from '../../factory/hospital/hospital-factory';
import {UserFactory} from '../../factory/user/user-factory';
import {User} from '../../model/user/user';

@Component({
  selector: 'app-write-record',
  templateUrl: './write-record.component.html',
  styleUrls: ['./write-record.component.css']
})
export class WriteRecordComponent implements OnInit {

  inputDiseaseName;
  inputDiagnosticDetail;
  inputHospitalName;
  inputDoctorName;

  patientId;
  doctorId;
  doctor: User;
  hospital: Hospital;

  constructor(
    public router: RouterService,
    private api: ApiService,
    private cookie: CookieService,
    private session: SessionService) {
  }

  async ngOnInit(): Promise<void> {
    this.patientId = await this.cookie.get('patient_id');
    this.doctorId = await this.session.checkSession();
    await this.getDoctorInfo();
    await this.getDoctorWorkPlace();

    this.inputDoctorName = 'dr. ' + this.doctor.first_name + ' ' + this.doctor.last_name;
    this.inputHospitalName = this.hospital.hospital_name;
  }

  async getDoctorWorkPlace() {
    const JSON = {
      doctor_id: this.doctorId
    };

    const response = await this.api.sendPostRequest('doctor-work-place', JSON);

    if (!response.error) {
      this.hospital = HospitalFactory.writeRecordPage(response.data.hospital_code, response.data.hospital_name);
    }
  }

  async getDoctorInfo() {
    const JSON = {
      user_id: this.doctorId
    };

    console.log(JSON);
    const response = await this.api.sendPostRequest('doctor-home', JSON);

    console.log(response);
    if (!response.error) {
      this.doctor = UserFactory.homePage(this.doctorId, response.data.first_name, response.data.last_name);
    }

    console.log(this.doctor);
  }

  async sendRecord() {
    const JSON = {
      patient_id: this.patientId,
      doctor_id: this.doctor.user_id,
      hospital_code: this.hospital.hospital_code,
      disease_name: this.inputDiseaseName,
      diagnostic_detail: this.inputDiagnosticDetail
    };

    const response = await this.api.sendPostRequest('doctor-write-record', JSON);

    if (!response.error) {
      await this.router.goToRecordListPage();
    }
  }
}
