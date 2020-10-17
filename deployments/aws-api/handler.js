import helloApi from '../../pages/api/hello';

function handleAwsHttpEventWithNextApi (event, nextApiFn) {
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

export const hello = async event => {
  return handleAwsHttpEventWithNextApi(event, helloApi);
};
