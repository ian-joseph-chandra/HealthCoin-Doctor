import {User} from '../../model/user/user';

export class UserFactory {

  public static homePage(userId: number, firstName: string, lastName: string) {
    const userData = new User();

    userData.user_id = userId;
    userData.first_name = firstName;
    userData.last_name = lastName;

    return userData;
  }

  public static doctorRecordListPage(userId: number, firstName: string, lastName: string) {
    const userData = new User();

    userData.user_id = userId;
    userData.first_name = firstName;
    userData.last_name = lastName;

    return userData;
  }

  public static patientRecordListPage(userId: number, firstName: string, lastName: string) {
    const userData = new User();

    userData.user_id = userId;
    userData.first_name = firstName;
    userData.last_name = lastName;

    return userData;
  }
}
