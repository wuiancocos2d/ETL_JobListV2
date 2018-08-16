import { PrepareJobListModule } from './prepare-job-list.module';

describe('PrepareJobListModule', () => {
  let prepareJobListModule: PrepareJobListModule;

  beforeEach(() => {
    prepareJobListModule = new PrepareJobListModule();
  });

  it('should create an instance', () => {
    expect(prepareJobListModule).toBeTruthy();
  });
});
