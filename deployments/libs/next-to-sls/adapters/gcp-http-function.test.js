import handleHTTP from './gcp-http-function';
import NextReplicaRequest from '../next-replicas/request';
import NextReplicaResponse from '../next-replicas/response';

describe('Handling GCP HTTP Event with FaaS (Google Cloud Functions)', () => {
  let mockRequest;
  let mockResponse;
  let mockNextApiFn;

  beforeEach(() => mockNextApiFn = jest.fn());

  it('sets status, headers and body with mockResponse method calls', () => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      set: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
    handleHTTP(mockRequest, mockResponse, mockNextApiFn);
    expect(mockResponse.status).toHaveBeenCalled();
    expect(mockResponse.set).toHaveBeenCalled();
    expect(mockResponse.send).toHaveBeenCalled();
  });

  it('calls nextApiFn with replica request and response', () => {
    handleHTTP(mockRequest, mockResponse, mockNextApiFn);
    expect(mockNextApiFn).toHaveBeenCalledWith(
      expect.any(NextReplicaRequest),
      expect.any(NextReplicaResponse)
    );
  });
});
