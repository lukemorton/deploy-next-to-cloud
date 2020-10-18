import { handleHTTP } from '../../libs/next-to-sls/azure';
import helloApi from '../../../pages/api/hello';

export const sayHello = async (context, req) => {
  return handleHTTP(context, req, helloApi);
};
