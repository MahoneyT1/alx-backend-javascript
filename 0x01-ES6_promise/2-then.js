export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'status' };

  return promise
    .then(() => obj)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));

};
return obj
