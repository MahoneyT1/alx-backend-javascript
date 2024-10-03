// Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

// Write and export a function named handleProfileSignup. It should accept three arguments
// firstName (string), lastName (string), and fileName (string). The function should call
// the two other functions. When the promises are all settled it should return an array with
// the following structure:

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const allResolved = [];

  try {
    const user = await signUpUser(firstName, lastName);

    allResolved.push({
      status: 'Fullfilled',
      value: user,
    });
  } catch (error) {
    allResolved.push({
      status: 'Rejected',
      value: error.toString(),
    });
  }

  try {
    const image = await uploadPhoto(fileName);

    allResolved.push({ status: 'Sucess', value: image });
  } catch (error) {
    allResolved.push({
      status: 'Rejected',
      value: error.toString(),
    });
  }
  return allResolved;
}
