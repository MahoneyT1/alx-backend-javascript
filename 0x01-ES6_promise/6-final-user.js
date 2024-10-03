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
