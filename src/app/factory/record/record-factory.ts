import {User} from '../../model/user/user';
import {Record} from '../../model/record/record';
import {Hospital} from '../../model/hospital/hospital';
import {sha256} from 'js-sha256';

export class RecordFactory {

  public static recordList(patientId, jsonList) {
    const records: Record[] = [];

    for (const result of jsonList) {
      const record = new Record();
      const doctor = new User();
      const hospital = new Hospital();
      const str = patientId + result.doctor_id + result.hospital_code + result.disease_name + result.diagnostic_detail;
      const hashValue = sha256(str);

      console.log(str);

      doctor.user_id = result.doctor_id;
      doctor.first_name = result.first_name;
      doctor.last_name = result.last_name;

      hospital.hospital_name = result.hospital_name;
      hospital.hospital_name = result.hospital_name;

      record.record_id = result.record_id;
      record.doctor_id = doctor;
      record.hospital_code = hospital;
      record.record_time = result.record_time;
      record.disease_name = result.disease_name;

      console.log(result.hash_value);
      console.log(hashValue);
      record.valid = hashValue === result.hash_value;
      records.push(record);
    }

    return records;
  }

  public static readRecord(record: Record, diagnoseInfo) {
    // const readRecordData = record;
    record.doctor_id = Object.assign(new User(), record.doctor_id);
    record.hospital_code = Object.assign(new Hospital(), record.hospital_code);
    record.diagnostic_detail = diagnoseInfo;

    return record;
  }
}
