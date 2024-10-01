export default function createEmployeesObject(departmentName, employees) {
  const schoolObject = {
    [`${departmentName}`]: [...employees],
  };
  return schoolObject;
}
