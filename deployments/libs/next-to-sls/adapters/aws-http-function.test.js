import handleHTTP from './aws-http-function';
import NextReplicaRequest from '../next-replicas/request';
import NextReplicaResponse from '../next-replicas/response';

describe('Handling AWS HTTP Event with FaaS (HTTP Lambda)', () => {
  const mockEvent = {};

  let mockNextApiFn;

  beforeEach(() => mockNextApiFn = jest.fn());

  it('returns statusCode, headers and body props', () => {
    const response = handleHTTP(mockEvent, mockNextApiFn);
    expect(response).toHaveProperty('statusCode');
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('body');
  });

  it('calls nextApiFn with replica request and response', () => {
    handleHTTP(mockEvent, mockNextApiFn);
    expect(mockNextApiFn).toHaveBeenCalledWith(
      expect.any(NextReplicaRequest),
      expect.any(NextReplicaResponse)
    );
  });
});
