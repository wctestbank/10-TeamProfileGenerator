class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getname
    getName(){
        return this.name;
    }

    //getid
    getId(){
        return this.id;
    }

    //getEmail
    getEmail(){
        return this.email;
    }

    //getRole
    getRole(){
        return 'Employee';
    }


}

module.exports = Employee;