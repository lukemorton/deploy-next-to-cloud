export default class NextReplicaResponse {
  constructor () {
    this.statusCode = 200;
    this.headers = {};
    this.body = undefined;
  }

  json (body) {
    this.headers['Content-Type'] = 'application/json';
    this.body = JSON.stringify(body);
    return this;
  }
}
