import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    
 
    let date = birth.toDateString()
   // let date = birth.toString()
    console.log(birth.toString())
  return (
    <div>
        <p>{lastName}</p>
        <p>{firstName}</p> 
        <p>{gender}</p>
        <p>{height}</p>
        <p>{date}</p> 
        <img src={picture} alt="userimage"/>
   
    </div>
  )
}

export default IdCard                               


  
// birth={new Date("1992-07-14")}