class Circle 
{ 
    protected radius: number; 
    protected readonly PI: number = 3.14; 
    
    constructor(radius: number) 
    { 
        this.radius = radius; 

    }
     public area(): number 
    { 
        return this.PI * this.radius * this.radius; 
    } 
}

class CircleX extends Circle 
{ 
    constructor(radius: number) 
    { 
        super(radius); 
    } 
    
    public circumference(): number 
    { return 2 * this.PI * this.radius; 

    } 
} 
 const circleX1 = new CircleX(5); 
 const circleX2 = new CircleX(10);

 console.log(`CircleX1 - Area: ${circleX1.area()}`); 
 console.log(`CircleX1 - Circumference: ${circleX1.circumference()}`); 
 
 console.log(`CircleX2 - Area: ${circleX2.area()}`); 
 console.log(`CircleX2 - Circumference: ${circleX2.circumference()}`);