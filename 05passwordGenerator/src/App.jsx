import { useState,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed]  = useState(false);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789";
    if (charAllowed) {
       str += "`~!@#$%^&*()_{}[]";      
    }
    for (let i = 1; i < length; i++) {
      let cha = Math.floor(Math.random()*str.length);
      pass += str.charAt(cha);
      
    }
    setPassword(pass);


  }, [length , numberAllowed , charAllowed , setPassword]);

  useEffect(() =>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator]);

 const copyPasswordtoClipboard = useCallback((event) =>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
  const button = event.target;
    const originalColor = button.style.backgroundColor;
    button.style.backgroundColor = "gray";

    // Revert the background color after 0.3 second (300 milliseconds)
    setTimeout(() => {
      button.style.backgroundColor = originalColor;
    }, 300); 
 },[password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white  text-center  my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        type="text"
        value={password}
        className=' outline-none
         w-full py-1 px-3  '
        placeholder = 'password'
        readOnly
        ref={passwordRef}
        
        />
        <button  onClick={copyPasswordtoClipboard}  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' >copy</button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e) =>{setLength(e.target.value)}}/>
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1 '>
        <input type="checkbox"
        defaultChecked = {numberAllowed}
        onChange={() =>{setNumberAllowed((prev) =>!prev);}} /> <label htmlFor="numberInput">Number</label>
      </div>
      <div className='flex items-center gap-x-1 '>
        <input type="checkbox"
        defaultChecked = {charAllowed}
        onChange={() =>{setCharAllowed((prev) =>!prev);}} 
        /> <label htmlFor="charInput">Character</label>
      </div>
      </div>
     
    </div>
    </>
   
  )
}

export default App
