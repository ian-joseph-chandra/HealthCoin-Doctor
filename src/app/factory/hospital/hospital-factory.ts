import {Hospital} from '../../model/hospital/hospital';

export class HospitalFactory {

  public static writeRecordPage(hospitalCode: string, hospitalName: string) {
    const hospital = new Hospital();

    hospital.hospital_code = hospitalCode;
    hospital.hospital_name = hospitalName;

    return hospital;
  }

}
