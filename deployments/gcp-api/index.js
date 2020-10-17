import helloApi from '../../pages/api/hello';

function handleGoogleHttpWithNextApi (request, response, nextApiFn) {
  const req = {};

  const res = {
    statusCode: 200,
    headers: {},
    body: undefined,
    json (jsonBody) {
      response.json(jsonBody)
      return this;
    }
  };

  nextApiFn(req, res);

  response.status(res.statusCode).send(res.body);
}

export const hello = async (request, response) => {
  handleGoogleHttpWithNextApi(request, response, helloApi);
};
