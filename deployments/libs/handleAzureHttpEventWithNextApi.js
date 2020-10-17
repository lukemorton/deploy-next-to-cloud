export default function handleAzureHttpEventWithNextApi (context, azureReq, nextApiFn) {
  const req = {};

  const res = {
    statusCode: 200,
    headers: {},
    body: '',
    json (jsonBody) {
      this.headers['Content-Type'] = 'application/json';
      this.body = JSON.stringify(jsonBody);
      return this;
    }
  };

  nextApiFn(req, res);

  context.res = {
    status: res.statusCode,
    headers: res.headers,
    body: res.body
  };
}
