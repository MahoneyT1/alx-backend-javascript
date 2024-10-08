// Create a function updateStudentGradeByCity that returns an array of students
//  for a specific city with their new grade

// It should accept a list of students (from getListStudents), a city (String),
// and newGrades (Array of “grade” objects) as parameters.

// newGrades is an array of objects with this format:

//   {
//     studentId: 31,
//     grade: 78,
//   }
// If a student doesn’t have grade in newGrades, the final grade should be N/A.

// You must use filter and map combined.

export default function updateStudentGradeByCity(array, string, newGrades = []) {
  return array.filter((student) => student.location === string)
    .map((student) => {
      // find the object of the student through the array newGrades
      const studentNewGrade = newGrades.find((objectId) => objectId.studentId === student.id);

      return {
        ...student,
        grade: studentNewGrade || 'N/A',
      };
    });
}
