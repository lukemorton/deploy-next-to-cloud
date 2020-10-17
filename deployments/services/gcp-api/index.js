import handleGcpHttpEventWithNextApi from '../../libs/handleGcpHttpEventWithNextApi';
import helloApi from '../../../pages/api/hello';

export const hello = async (request, response) => {
  handleGcpHttpEventWithNextApi(request, response, helloApi);
};
