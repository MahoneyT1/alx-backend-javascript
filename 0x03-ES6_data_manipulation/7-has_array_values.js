// Create a function named hasValuesFromArray that returns a boolean
// if all the elements in the array exist within the set.

// It accepts two arguments: a set (Set) and an array (Array).

export default function hasValuesFromArray(set, arr) {
  return arr.every((element) => set.has(element));
}
