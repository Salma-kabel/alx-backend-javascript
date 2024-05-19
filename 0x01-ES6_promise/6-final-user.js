mport signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';


export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const res = await Promise.allSettled(promise);
  const response = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i].status === 'fulfilled') {
      response.push({
        status: res[i].status,
        value: res[i].value,
      });
    } else {
      res.push({
        status: res[i].status,
        value: res[i].reason,
      });
    }
  }

  return response;
}
}
