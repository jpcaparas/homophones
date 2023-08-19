import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import { HomophonesFinder } from '../src/homophonesFinder';
import { ApiFetcher } from '../src/apiFetcher';

describe('HomophonesFinder', () => {

  let stub: sinon.SinonStub;

  before(() => {
    // Setup mock data
    const mockData = [
      {
        "word": "bear",
        "score": 100,
        "numSyllables": 1
      },
      {
        "word": "bare",
        "score": 99,
        "numSyllables": 1
      }
    ];

    // Stub axios GET request to return mock data
    stub = sinon.stub(axios, 'get').resolves({ data: mockData });
  });

  after(() => {
    // Restore the stubbed axios method back to its original state
    stub.restore();
  });

  it('should find homophones for a given word', async () => {
    const finder = new HomophonesFinder(new ApiFetcher());
    const result = await finder.find('bear');
    expect(result).to.deep.equal(['bear', 'bare']);
  });
});
