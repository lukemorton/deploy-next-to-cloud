export default function handleAwsHttpEventWithNextApi (event, nextApiFn) {
  const req = {};

  const res = {
    statusCode: 200,
    body: '',
    json (jsonBody) {
      this.body = JSON.stringify(jsonBody);
      return this;
    }
  };

  nextApiFn(req, res);

  return {
    statusCode: res.statusCode,
    body: res.body,
  };
}
