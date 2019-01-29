import { environment } from 'src/environments/environment.prod';

const baseUrl = environment.baseUrl;
export const AuthUrls = {
  login: baseUrl + 'api/login'
};

export const UsersUrls = {
  listUsers: baseUrl + 'api/users',
  singleUser: baseUrl + 'api/users/',
  createUser: baseUrl + 'api/users',
  updateUser: baseUrl + 'api/users/',
  deleteUser: baseUrl + 'api/users/'
};
