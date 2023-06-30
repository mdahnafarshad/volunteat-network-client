

import {  useContext } from 'react';
import './App.css';
import { AuthContext } from './Provider/AuthProvider';



function App() {

  const {loading, createUser, user} = useContext(AuthContext);

console.log('13', loading, createUser, "user13"+user);
   
  return (
    <>
      
      
      
      
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      
    </>
  )
  
}




export default App
