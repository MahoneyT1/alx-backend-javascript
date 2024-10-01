export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(report.allEmployees).length,
  };
  return report;
}
