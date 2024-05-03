/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
module.exports = handleProfileSignup;
