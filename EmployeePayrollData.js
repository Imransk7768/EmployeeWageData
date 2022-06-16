class EmployeePayrollData
{
    id;
    name;
    salary;
    gender;
    startDate;

    constructor (id,name,salary) 
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getname(){return this._name;}
    set name(name){this._name=name;}
    toString()
    {
        return  "id = " +this.id + ", Name : " + this.name +", Salary : " + this.salary;
    }

}
let employeePayrollData = new employeePayrollData(1,"Rehan", 3000);
console.log(employeePayrollData.toString());
employeePayrollData.id=0;
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());