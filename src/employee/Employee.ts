export abstract class Person {
    id!: number;
    name!: string;
    age!: number;
    private _gender!: Gender;
    get gender() {
        return this._gender;
    }

    set gender(genderVal: Gender) {
        if (!this._gender) {
            this._gender = genderVal;
        } else {
            console.log('gender already set');
        }
    }
}

export class Employee extends Person {
    private _projects!: string[];

    set projects(val: string[]) {
        this._projects = val;
    }

    get projects() {
        return this._projects;
    }
}

export type Gender = 'Male' | 'Female' | 'Other';

export class SeniorEmployee extends Person {
    experiance!: number;

    fetchExperiance(): string {
        if (this.experiance) {
            return `I am ${this.name} my experiance is ${this.experiance}`;
        } else {
            return `I am ${this.name} my experiance is none`;
        }
    }
}