export default function getListStudents() {
  const allStudent = [];

  const firstStudent = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const secondStudent = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const thirdStudent = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  allStudent.push(firstStudent, secondStudent, thirdStudent);

  return allStudent;
}
