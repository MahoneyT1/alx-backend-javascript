// Return a Promise using this prototype function
// getResponseFromAPI()

export default function getResponseFromAPI() {
  const promise = new Promise((resolved, reject) => {
    if (resolved) {
      return resolved;
    }

    return reject;
  });

  return promise;
}
