export default function queryAPI({ protocol, name }) {
    // Create a unique key for the endpoint
    const endpointKey = { protocol, name };
  
    // Check if the weakMap already has this endpoint
    if (weakMap.has(endpointKey)) {
      // Get the current count for this endpoint
      const count = weakMap.get(endpointKey) + 1;
      weakMap.set(endpointKey, count); // Update the count
  
      // Check if the count is 5 or more
      if (count >= 5) {
        throw new Error('Endpoint load is high');
      }
    } else {
      // If the endpoint is not tracked yet, set it to 1
      weakMap.set(endpointKey, 1);
    }
  
    return weakMap.get(endpointKey); // Return the current count
  }