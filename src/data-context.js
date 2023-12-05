import React from "react";
const dataContext=React.createContext({
    data:[
        { key:Math.random()
          ,name:"Sushi"
          ,price: 22.99,
          description:"finest fish and veggies"
          ,amount:0
      
        }
        ,{ key:Math.random()
          ,name:"Shnitzel"
          ,price: 16.5,
          description:"a german specialty"
          ,amount:0
        },
        { key:Math.random()
          ,name:"Barbecue burger"
          ,price: 12.99,
          description:"american , raw, meaty"
          ,amount:0
        },
        { key:Math.random()
          ,name:"Green Bowl"
          ,price: 18.99,
          description:"healthy .. and green .."
          ,amount:0
        }
      ],
});
export default dataContext;