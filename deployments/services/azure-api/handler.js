import handleAzureHttpEventWithNextApi from '../../libs/handleAzureHttpEventWithNextApi';
import helloApi from '../../../pages/api/hello';

export const sayHello = async (context, req) => {
  return handleAzureHttpEventWithNextApi(context, req, helloApi);
};
