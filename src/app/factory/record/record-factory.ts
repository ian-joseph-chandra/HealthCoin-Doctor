import {User} from '../../model/user/user';
import {Record} from '../../model/record/record';
import {Hospital} from '../../model/hospital/hospital';

export class RecordFactory {

  public static recordList(jsonList) {
    const records: Record[] = [];

    for (const result of jsonList) {
      const record = new Record();
      const doctor = new User();
      const hospital = new Hospital();

      doctor.first_name = result.first_name;
      doctor.last_name = result.last_name;

      hospital.hospital_name = result.hospital_name;

      record.record_id = result.record_id;
      record.doctor_id = doctor;
      record.hospital_code = hospital;
      record.record_time = result.record_time;
      record.disease_name = result.disease_name;

      records.push(record);
    }

    return records;
  }


  public static readRecord(record: Record, diagnoseInfo) {
    const readRecordData = record;

    readRecordData.diagnostic_detail = diagnoseInfo;

    return readRecordData;
  }
}
