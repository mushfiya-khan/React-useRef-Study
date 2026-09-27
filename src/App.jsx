import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Test from './assets/components/Test'

function App() {
  // const [name, setName] = useState()

  // function handlesubmit(e) {
  //   e.preventDefault();
  //   alert(`Form Submitted ${name}`);
  //}
  const testref = useRef();
  const btnclicked=(()=>{
    console.log(testref.current)
  })

  return (
    <>
    {/* <form onSubmit={handlesubmit}>
      <input type="text" 
      value={name}
      onChange={(e)=>{
        setName(e.target.value)
      }} />
      <button type="submit">submit</button>
    </form> */}
    <Test ref={testref}/>
    <button  onClick={btnclicked}>Console</button>
      
    </>
  )
}

export default App
