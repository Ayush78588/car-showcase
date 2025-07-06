import {createContext, useState} from 'react';

export const UserContext = createContext({
    name:'Ayush Kumar',
    email: "ayu78@g.com",
    age: 44
});





// const UserProvider = ({children}) => {
//     const [user, setUser] = useState(null);


//     return (
//         <>
//             <UserContext.Provider value={{user, setUser}} >
//                 {children}
//             </UserContext.Provider>
//         </>
//     )
// }






console.log(UserContext);




