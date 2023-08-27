import React, {useState, useEffect} from 'react'
import Nav from './Nav'

const Words = () => {
    const tileStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold focus:outline-none focus:border-gray-500"
    const [guess, setGuess] = useState("")
    let word = "House"
    word = word.toUpperCase().split("")
    let i = 1


    const changeHandler = event => {
      setGuess({...guess,[event.target.name]: event.target.value.toUpperCase()})
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
    
    useEffect(() => {
      const keyDownHandler = event => {
        if (event.key === 'Enter') {
          
          submitHandler(event);
        }
      };
        document.addEventListener('keydown', keyDownHandler);
  
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, [guess]);



    const submitHandler = e =>{
      e.preventDefault()
      guessedWord = Object.values(guess)
      console.log("yay",guessedWord)
    }

  
  return (
    <>
        <Nav />
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              {
              
              word[0] == guess.r11?
              <input type="text" name="r11" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r11}/>
              :
              <input type="text" name="r11" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r11}/>
              
              }
              <input type="text" name="r12" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r12}/>
              <input type="text" name="r13" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r13}/>
              <input type="text" name="r14" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r14}/>
              <input type="text" name="r15" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r15}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r21" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r21}/>
              <input type="text" name="r22" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r22}/>
              <input type="text" name="r23" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r23}/>
              <input type="text" name="r24" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r24}/>
              <input type="text" name="r25" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r25}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r31" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r31}/>
              <input type="text" name="r32" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r32}/>
              <input type="text" name="r33" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r33}/>
              <input type="text" name="r34" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r34}/>
              <input type="text" name="r35" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r35}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r41" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r41}/>
              <input type="text" name="r42" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r42}/>
              <input type="text" name="r43" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r43}/>
              <input type="text" name="r44" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r44}/>
              <input type="text" name="r45" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r45}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r51" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r51}/>
              <input type="text" name="r52" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r52}/>
              <input type="text" name="r53" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r53}/>
              <input type="text" name="r54" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r54}/>
              <input type="text" name="r55" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r55}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r61" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r61}/>
              <input type="text" name="r62" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r62}/>
              <input type="text" name="r63" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r63}/>
              <input type="text" name="r64" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r64}/>
              <input type="text" name="r65" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r65}/>
          </div>
        </form>
    </>
  )
}

export default Words
