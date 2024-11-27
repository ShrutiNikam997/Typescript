class Arithmetic 
{
     private number1: number;
     private number2: number;
     constructor(number1: number, number2: number)
    { 
        this.number1 = number1; 
        this.number2 = number2;
    }

    public addition(): number 
    {
         return this.number1 + this.number2; 
    } 
    public subtraction(): number 
    {
         return this.number1 - this.number2;
    }

    public multiplication(): number 
    { 
        return this.number1 * this.number2; 
    } 
    public division(): number
    { 
        if (this.number2 === 0) 
    { 
        throw new Error("Division by zero is not allowed"); 
    } 
        return this.number1 / this.number2; 
    }
}    

const arithmetic1 = new Arithmetic(10, 5); 
const arithmetic2 = new Arithmetic(15, 3);

console.log(`Arithmetic1 - Addition: ${arithmetic1.addition()}`); 
console.log(`Arithmetic1 - Subtraction: ${arithmetic1.subtraction()}`);
console.log(`Arithmetic1 - Multiplication: ${arithmetic1.multiplication()}`);
console.log(`Arithmetic1 - Division: ${arithmetic1.division()}`);
 
console.log(`Arithmetic2 - Addition: ${arithmetic2.addition()}`); 
console.log(`Arithmetic2 - Subtraction: ${arithmetic2.subtraction()}`); 
console.log(`Arithmetic2 - Multiplication: ${arithmetic2.multiplication()}`); 
console.log(`Arithmetic2 - Division: ${arithmetic2.division()}`);