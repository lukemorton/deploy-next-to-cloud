import { handleHTTP } from '../../libs/next-to-sls/gcp';
import helloApi from '../../../pages/api/hello';

export const hello = async (request, response) => {
  handleHTTP(request, response, helloApi);
};
