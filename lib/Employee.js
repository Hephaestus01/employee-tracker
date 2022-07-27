class Employee {
    constructor(first_name, last_name, role_id, manager_id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    getName() {
        return this.name
    };

    getId() {
        return this.id
    };


    getEmail() {
        return this.email
    };


    getRole() {
        if (this.office) {
            return 'Manager';
        }
    };
}

module.exports = Employee