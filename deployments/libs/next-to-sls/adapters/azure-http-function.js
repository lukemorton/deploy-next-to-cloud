import NextReplicaRequest from '../next-replicas/request';
import NextReplicaResponse from '../next-replicas/response';

export default function handle (context, azureReq, nextApiFn) {
  const req = new NextReplicaRequest;
  const res = new NextReplicaResponse;

  nextApiFn(req, res);

  context.res = {
    status: res.statusCode,
    headers: res.headers,
    body: res.body
  };
}
