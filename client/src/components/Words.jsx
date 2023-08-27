import React, {useState} from 'react'
import Nav from './Nav'

const Words = () => {
    const tileStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold focus:outline-none focus:border-gray-500"
    const [guess, setGuess] = useState("")

    const changeHandler = event => {
      // console.log(event)
      if(event.target.value.length == 1){
        if(event.target.nextSibling != null){
          event.target.nextElementSibling.focus()
        }
      }else{
        if(event.target.previousSibling != null){
          event.target.previousElementSibling.focus()
        }
      }
    }

    const submitHandler = e =>{
      e.preventDefault()
    }

  
  return (
    <>
        <Nav />
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center">
              <input type="text" onChange={changeHandler}className={tileStyle} maxLength="1"/>
              <input type="text" onChange={changeHandler}className={tileStyle} maxLength="1"/>
              <input type="text" onChange={changeHandler}className={tileStyle} maxLength="1"/>
              <input type="text" onChange={changeHandler}className={tileStyle} maxLength="1"/>
              <input type="text" onChange={changeHandler}className={tileStyle} maxLength="1"/>
          </div>
        </form>
    </>
  )
}

export default Words
