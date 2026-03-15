class Customer{
    firstName: string;
    lastName: string;

    public greeter(){
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

// object = instance of a class
let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Doe";
customer.greeter();
