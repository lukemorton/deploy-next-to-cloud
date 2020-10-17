import handleAwsHttpEventWithNextApi from '../../libs/handleAwsHttpEventWithNextApi';
import helloApi from '../../../pages/api/hello';

export const hello = async event => {
  return handleAwsHttpEventWithNextApi(event, helloApi);
};
