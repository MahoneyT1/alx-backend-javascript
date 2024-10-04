import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Collect promises without awaiting them
    const results = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ]);

    // Map over the results to format them into an array of objects
    const allResolved = results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));

    return allResolved; // Return the formatted results
  } catch (error) {
    console.error('Error in handleProfileSignup:', error);
    // You can also return an array with error information if needed
    return [{ status: 'rejected', value: error.message }];
  }
}
