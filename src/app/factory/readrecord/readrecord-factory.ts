import {Record} from '../../model/record/record';

export class ReadRecordFactory {

  public static readRecord(diagnoseInfo: string, hospitalCode, doctorName, diagnoseDesc: string) {
    const readRecordData = new Record();

    readRecordData.diagnose_info = diagnoseInfo;
    readRecordData.hospital_code = hospitalCode;
    readRecordData.doctor_id = doctorName;



}
}
