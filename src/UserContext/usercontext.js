// import React, { useState } from "react";
// import firebase from "firebase";
// import "firebase/auth";

// export const UserContext = React.createContext();

// const firebaseconfig = {
//   apiKey: "AIzaSyAC1K2OAtD7RSIIcL28DwGVEyrXzAEihwk",
//   authDomain: "findmygroup-62c6b.firebaseapp.com",
//   projectId: "findmygroup-62c6b",
//   storageBucket: "findmygroup-62c6b.appspot.com",
//   messagingSenderId: "606897342393",
//   appId: "1:606897342393:web:e5f3b12435a41dbb795868",
//   measurementId: "G-6WF17LB3LQ",
// };

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   firebase.initializeApp(firebaseconfig).auth().onAuthStateChanged(setUser);
//   // }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
