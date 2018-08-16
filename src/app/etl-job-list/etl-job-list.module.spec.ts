import { EtlJobListModule } from './etl-job-list.module';

describe('EtlJobListModule', () => {
  let etlJobListModule: EtlJobListModule;

  beforeEach(() => {
    etlJobListModule = new EtlJobListModule();
  });

  it('should create an instance', () => {
    expect(etlJobListModule).toBeTruthy();
  });
});
