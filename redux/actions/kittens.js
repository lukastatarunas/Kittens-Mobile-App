import { GET_KITTENS_REQUESTED } from '../types';

const getKittens = () => {
  return {
    type: GET_KITTENS_REQUESTED,
  };
};

export default getKittens;
