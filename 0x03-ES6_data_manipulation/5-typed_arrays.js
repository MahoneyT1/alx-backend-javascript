// Create a function named createInt8TypedArray that returns a
// new ArrayBuffer with an Int8 value at a specific position.

// It should accept three arguments: length (Number),
// position (Number), and value (Number).

// If adding the value is not possible the error
// Position outside range should be thrown.

export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const setValue = new DataView(buffer);

  try {
    setValue.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return setValue;
}
