import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/PRANJ123').then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })

  },[])
  return (
    <div className='text-centre m-5 bg-gray-600 text-white flex justify-center'>Github Followers:{data.followers}</div>
  )
}

export default Github
