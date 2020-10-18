import handleHTTP from './azure-http-function';
import NextReplicaRequest from '../next-replicas/request';
import NextReplicaResponse from '../next-replicas/response';

describe('Handling Azure HTTP Event with FaaS (HTTP Function App)', () => {
  const mockContext = {};
  const mockAzureRequest = {};

  let mockNextApiFn;

  beforeEach(() => mockNextApiFn = jest.fn());

  it('sets status, headers and body on context.res', () => {
    handleHTTP(mockContext, mockAzureRequest, mockNextApiFn);
    expect(mockContext.res).toHaveProperty('status');
    expect(mockContext.res).toHaveProperty('headers');
    expect(mockContext.res).toHaveProperty('body');
  });

  it('calls nextApiFn with replica request and response', () => {
    handleHTTP(mockContext, mockAzureRequest, mockNextApiFn);
    expect(mockNextApiFn).toHaveBeenCalledWith(
      expect.any(NextReplicaRequest),
      expect.any(NextReplicaResponse)
    );
  });
});
