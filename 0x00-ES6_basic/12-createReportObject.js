export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeeList},
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;;
    },
  };
}
