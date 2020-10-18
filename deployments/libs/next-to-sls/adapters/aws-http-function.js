import NextReplicaRequest from '../next-replicas/request';
import NextReplicaResponse from '../next-replicas/response';

export default function handle (event, nextApiFn) {
  const req = new NextReplicaRequest;
  const res = new NextReplicaResponse;

  nextApiFn(req, res);

  return {
    statusCode: res.statusCode,
    headers: res.headers,
    body: res.body,
  };
}
