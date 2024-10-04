import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const allResolved = [];

  try {
    const results = Promise.allSettled([await signUpUser(firstName, lastName),
      await uploadPhoto(fileName)]);

    results.forEach((result) => {
      allResolved.push(
        {
          status: 200,
          value: result,
        },

      );
    });
  } catch (error) {
    console.error(error);
  }
  return allResolved;
}
