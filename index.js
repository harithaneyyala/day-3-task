class Book{
    title;
    author;
    isbn;
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkOut(){
        console.log(this.title ,"checkout is done" );
    }
    returnBook(){
        console.log(this.title, "Book is returned");
    }
    updateTitle(newTitle){
        this.title=newTitle;
    }
}
var book1 =new Book('Manifest','Roxi', '200');
book1.checkOut();
book1.returnBook();
book1.updateTitle('Manifest');
console.log(book1);

// code-2

class Ecommerce{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
        this.price=amount*0.1;
    }
    getPriceAfterDiscount(){
        console.log(this.price,'price is set after discount');
    }
}
var Flipkart = new Ecommerce('flipcart','1000','costomer-to-customer');
Flipkart.applyDiscount(1000);
Flipkart.getPriceAfterDiscount();
console.log(Flipkart);

// code 3

class BankAccount{
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(ammount){
        this.balace=this.balance + ammount;
        console.log('deposit is done');
    }
    withdraw(ammount){
        console.log(this.accountNumber,'withdraw is done');
    }
    getBalance(){
        console.log("Available balance is",this.balance);
    }
}
var hdfc = new BankAccount('Haritha','1256789','180000000000');
hdfc.deposit(500);
hdfc.withdraw(500);
hdfc.getBalance();
console.log(hdfc);

// code-4

class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        console.log('thar mileage is',this.mileage);
        this.mileage=miles+this.mileage;
    }
    getMileage(){
        console.log('Thar mileage of',this.licensePlate,'is','200');
    }
}
var thar = new Vehicle ('super fast','APDC456' ,'200');
thar.drive(70);
thar.getMileage();
console.log(thar);

// CODE-5

class Bsection{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
    }
    getGrade(){
        console.log(this.name,'current garde is', this.grade);
    }
}
var Student = new Bsection('Haritha','b');
Student.setGrade('a');
Student.getGrade();
console.log(Student);