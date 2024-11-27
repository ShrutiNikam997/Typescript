        function Addition(Value1 : number , Value2 : number) : number
        {
            console.log("Inside addition function")
            var Ans : number = 0//Local variables
            Ans = Value1 + Value2
            return Ans
        }

        console.log("Start of application")
        var Result : number = 0
        Result = Addition(10,11)
        console.log("Addtion is :"+Result)
        console.log("End of application")

/*                    V--------------------------------------------------|   
        function Addition(Value1 : number , Value2 : number) : number    |
        {                                                                |    
        |    console.log("Inside addition function")                     |
     [4]|   var Ans : number = 0//Local variables                       |
        |    Ans = Value1 + Value2                                       |          
        V    return Ans-------------------------                         |
        }                                       |                        |[3]
  [1]                                           |                        |
-------> console.log("Start of application")    |                        |
    [2]| var Result : number = 0                |[5]                        | 
       V Result = Addition(10,11)---------------|-------------------------
       / console.log("Addtion is :"+Result)     |
   [6]|   console.log("End of application")     | 
      |-----------------------------------------|
*/