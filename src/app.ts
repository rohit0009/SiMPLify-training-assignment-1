import { EmployeeManger } from "./employee/EmployeeManager";

async function main() {
    let empMngr = new EmployeeManger();
    await empMngr.createEmployees(3);
    empMngr.fetchEmployees();
}

main();