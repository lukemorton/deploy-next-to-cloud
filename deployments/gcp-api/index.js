import handleGcpHttpEventWithNextApi from '../src/handleGcpHttpEventWithNextApi';
import helloApi from '../../pages/api/hello';

export const hello = async (request, response) => {
  handleGcpHttpEventWithNextApi(request, response, helloApi);
};
