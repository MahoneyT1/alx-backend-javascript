export default function updateUniqueItems(map) {
  map.forEach((value, key) => {
    if (value === 1) {
        try {
            map.set(key, 100);

        } catch (error) {
            throw new Error('Cannot process')
        }
    }
  });
  return map;
}
