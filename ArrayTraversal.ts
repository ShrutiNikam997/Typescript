var Data1 : number[] = new Array(1)
Data1 = [11,21,51,10]

var Cnt : number = 0

for(Cnt =0; Cnt<Data1.length; Cnt++)
{
    console.log(Data1[Cnt])
}

var Sum : number = 0

for(Cnt =0; Cnt < Data1.length; Cnt++)
{
    Sum = Sum+Data1[Cnt]
}
console.log("Summation is :"+Sum)
 