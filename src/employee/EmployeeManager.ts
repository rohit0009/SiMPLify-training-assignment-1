import { Employee, Gender, Person, SeniorEmployee } from "./Employee";

export class EmployeeManger {
    private employeeList: Map<number, Person>;
    private uniqueNameEmployeeList: Map<string, Person>;
    private id: Generator;
    
    constructor() {
        this.employeeList = new Map<number, Employee>();
        this.uniqueNameEmployeeList = new Map<string, Employee>();
        this.id = this.idMaker();
    }

    async createEmployees(numberOfEmployees: number): Promise<Person[]> {
        let newlyAddedEmployee: Person[] = [];
        for(let i = 1; i <= numberOfEmployees; i++) {
            const tempEmp: Person = new Employee();
            tempEmp.id = <number>this.id.next().value;
            tempEmp.name = `Employee ${i}`;
            tempEmp.gender = i%2 === 0 ? 'Male': 'Female';
            tempEmp.gender = i%2 === 0 ? 'Male': 'Female';
            (tempEmp as Employee).projects = ['Project 1'];
            tempEmp.age = 18;
            newlyAddedEmployee.push(tempEmp);
            this.employeeList.set(tempEmp.id, tempEmp);
            let nameFound = false;
            this.uniqueNameEmployeeList.forEach((val: Person, key: string) => {
                if (val.name === tempEmp.name) {
                    nameFound = true;
                }
            });
            if (nameFound === false) {
                this.uniqueNameEmployeeList.set(tempEmp.name, tempEmp);
            }
        }

        const tempEmp: Person = new SeniorEmployee();
        tempEmp.id = <number>this.id.next().value;
        tempEmp.name = `Employee ${numberOfEmployees}`;
        tempEmp.gender = numberOfEmployees%2 === 0 ? 'Male': 'Female';
        tempEmp.gender = numberOfEmployees%2 === 0 ? 'Male': 'Female';
        (tempEmp as SeniorEmployee).experiance = 30;
        console.log(tempEmp.gender);
        tempEmp.age = 48;
        newlyAddedEmployee.push(tempEmp);
        this.employeeList.set(tempEmp.id, tempEmp);
        let nameFound = false;
        this.uniqueNameEmployeeList.forEach((val: Person, key: string) => {
            if (val.name === tempEmp.name) {
                nameFound = true;
            }
        });
        if (nameFound === false) {
            this.uniqueNameEmployeeList.set(tempEmp.name, tempEmp);
        }

        return newlyAddedEmployee;
    }

    fetchEmployees() {
        this.employeeList.forEach(item => {
            console.log('Name -> ', item.name);
            console.log('Gender -> ', item.gender);
            console.log('Age -> ', item.age);
            if (item instanceof Employee) {
                (item as Employee).projects.forEach((projectItem, index) => {
                    console.log(`Project ${index + 1} `, projectItem);
                })
            }

            if (item instanceof SeniorEmployee) {
                console.log('Experiance -> ', (item as SeniorEmployee).fetchExperiance());
            }
        })
    }

    private *idMaker() {
        let id = 1;
        while(true) {
            yield id++;
        }
    }
}