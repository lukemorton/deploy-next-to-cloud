import { handleHTTP } from '../../libs/next-to-sls/aws';
import helloApi from '../../../pages/api/hello';

export const hello = async event => {
  return handleHTTP(event, helloApi);
};
