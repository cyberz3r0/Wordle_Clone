import React, {useState, useEffect} from 'react'
import Nav from './Nav'

const Words = () => {
    const tileStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold focus:outline-none focus:border-gray-500"
    const incorrectStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#3A3A3C]"
    const closeStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#B59F3B]"
    const correctStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#538D4E]"
    const [guess, setGuess] = useState("")
    const [letterStatus, setLetterStatus] = useState({
      r0: "", r1: "", r2: "", r3: "", r4: "",
      r5: "", r6: "", r7: "", r8: "", r9: "",
      r10: "", r11: "", r12: "", r13: "", r14: "",
      r15: "", r16: "", r17: "", r18: "", r19: "",
      r20: "", r21: "", r22: "", r23: "", r24: "",
      r25: "", r26: "", r27: "", r28: "", r29: ""
    });
    // const [tester, setTester] = useState(
    //   {"g0":{genWord:"H", userGuess:"", color:"white"},
    //   "g1":{genWord:"O", userGuess:"", color:"white"},
    //   "g2":{genWord:"U", userGuess:"", color:"white"},
    //   "g3":{genWord:"S", userGuess:"", color:"white"}, 
    //   "g4":{genWord:"E", userGuess:"", color:"white"}})
    let word = "House"
    word = word.toUpperCase().split("")
    let round = 0
    


    const changeHandler = event => {
      // console.log("🚀 ~ file: Words.jsx:20 ~ changeHandler ~ tester.g01:", tester.g0)
      // console.log({...tester.g0, userGuess:event.target.value.toUpperCase()})
      // setTester({...tester,g0:{...tester.g0, userGuess:event.target.value.toUpperCase()}})
      setGuess({...guess, [event.target.name]: event.target.value.toUpperCase()})
      console.log("🚀 ~ file: Words.jsx:15 ~ changeHandler ~ event.target:", event.target)
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
    }, [guess,letterStatus]);



    const submitHandler = e =>{
      e.preventDefault()
      checkWords()
    }

    // const renderInput = (name, status) => (
    //   <input
    //     type="text"
    //     name={name}
    //     onChange={changeHandler}
    //     className={`${tileStyle} ${status == "Right" ? correctStyle : ""} ${status === "Close" ? closeStyle : ""} ${status === "Incorrect" ? incorrectStyle : ""}`}
    //     maxLength="1"
    //     value={guess[name]}
    //   />
    // );

    const checkWords = () =>{
      // for (let i of Object.keys(tester)){
      //   // console.log("🚀 ~ file: Words.jsx:59 ~ checkWords ~ i:", tester[i])
      //   console.log({...tester[i], color:"green"})
      //   setTester({...tester,${i}`]:{...tester[i], color:"green"}})

        
        
      // }
      round++
      let guessArr = Object.values(guess)
      if (round==1){
        for (let i = 0; i < 5; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i]){
                letterStatus[`r${i}`]="Right"
                
                // setLetterStatus({...letterStatus,})
                // setGuess({...guess, ${i}: "Right"})
                console.log("Right",guessArr[i],word[i])
              }else{
                // setGuess({...guess,status: "Close"})
                letterStatus[`r${i}`]="Close"

                console.log("Close",guessArr[i],word[i])
              }
            }else{
              letterStatus[`r${i}`]="Incorrect"
              console.log("no",guessArr[i],word[i])
            }
        }
        
      }
      
    }
  return (
    <>
        <Nav />
        
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
          {/* {renderInput("r0", letterStatus.r0)} */}
              {/* <input type="text" name="r0" style={{backgroundColor:tester.g0.color}} onChange={changeHandler}className={tileStyle} maxLength="1" value={tester.g0.userGuess}/> */}
              {
                letterStatus.r0 == "Right"?
                <input type="text" name="r0" onChange={changeHandler}className={correctStyle} maxLength="1" value={guess.r0}/>
                :""
              }
              {
                letterStatus.r0 == "Close"?
                <input type="text" name="r0" onChange={changeHandler}className={closeStyle} maxLength="1" value={guess.r0}/>
                :""
              }
              {
                letterStatus.r0 == "Incorrect"?
                <input type="text" name="r0" onChange={changeHandler}className={incorrectStyle} maxLength="1" value={guess.r0}/>
                :""
              }
              {
                letterStatus.r0 == ""?
                <input type="text" name="r0" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r0}/>
                :""
              }
              {/* <input type="text" name="r0" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r0}/> */}
              <input type="text" name="r1" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r1}/>
              <input type="text" name="r2" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r2}/>
              <input type="text" name="r3" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r3}/>
              <input type="text" name="r4" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r4}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r5" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r5}/>
              <input type="text" name="r6" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r6}/>
              <input type="text" name="r7" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r7}/>
              <input type="text" name="r8" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r8}/>
              <input type="text" name="r9" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r9}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r10" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r10}/>
              <input type="text" name="r11" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r11}/>
              <input type="text" name="r12" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r12}/>
              <input type="text" name="r13" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r13}/>
              <input type="text" name="r14" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r14}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r15" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r15}/>
              <input type="text" name="r16" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r16}/>
              <input type="text" name="r17" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r17}/>
              <input type="text" name="r18" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r18}/>
              <input type="text" name="r19" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r19}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r20" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r20}/>
              <input type="text" name="r21" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r21}/>
              <input type="text" name="r22" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r22}/>
              <input type="text" name="r23" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r23}/>
              <input type="text" name="r24" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r24}/>
          </div>
        </form>
        <form onSubmit={submitHandler}>
          <div className="flex w-4/5 justify-center my-2">
              <input type="text" name="r25" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r25}/>
              <input type="text" name="r26" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r26}/>
              <input type="text" name="r27" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r27}/>
              <input type="text" name="r28" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r28}/>
              <input type="text" name="r29" onChange={changeHandler}className={tileStyle} maxLength="1" value={guess.r29}/>
          </div>
        </form>
    </>
  )
}

export default Words
