import { HospitalFactory } from './hospital-factory';

describe('Hospital', () => {
  it('should create an instance', () => {
    expect(new HospitalFactory()).toBeTruthy();
  });
});
