

import {  useContext } from 'react';
import './App.css';
import { AuthContext } from './Provider/AuthProvider';



function App() {

  const {loading, createUser} = useContext(AuthContext);

console.log('13', loading, createUser);
   
  return (
    <>
      
      
      
      
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      
    </>
  )
  
}




export default App
