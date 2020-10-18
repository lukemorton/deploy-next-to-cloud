import NextReplicaRequest from '../next-replicas/request';
import NextReplicaResponse from '../next-replicas/response';

export default function handle (request, response, nextApiFn) {
  const req = new NextReplicaRequest;
  const res = new NextReplicaResponse;

  nextApiFn(req, res);

  response.status(res.statusCode).set(res.headers).send(res.body);
}
