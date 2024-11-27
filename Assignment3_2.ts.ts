class Circle
 { private radius: number; 
    private readonly PI: number = 3.14;
    
    constructor(radius: number) 
    { 
        this.radius = radius; 
    } 
    
    public area(): number 
    { 
        return this.PI * this.radius * this.radius; 
    } 
} 

const circle1 = new Circle(5); 
const circle2 = new Circle(10);

console.log(`Area of Circle1: ${circle1.area()}`); 
console.log(`Area of Circle2: ${circle2.area()}`);