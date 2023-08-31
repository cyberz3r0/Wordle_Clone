import React, {useState, useEffect} from 'react'
import Nav from './Nav'

const Words = () => {
    const tileStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold focus:outline-none focus:border-gray-500 disabled-input"
    const incorrectStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#3A3A3C] "
    const closeStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#B59F3B] disabled"
    const correctStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#538D4E] disabled"
    const [guess, setGuess] = useState("")
    const [round,setRound] = useState(0)
    const [letterStatus, setLetterStatus] = useState({
      r0: "", r1: "", r2: "", r3: "", r4: "",
      r5: "", r6: "", r7: "", r8: "", r9: "",
      r10: "", r11: "", r12: "", r13: "", r14: "",
      r15: "", r16: "", r17: "", r18: "", r19: "",
      r20: "", r21: "", r22: "", r23: "", r24: "",
      r25: "", r26: "", r27: "", r28: "", r29: ""
    });
    let word = "House"
    word = word.toUpperCase().split("")
    
    


    const changeHandler = event => {
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
         
          checkWords();
        }
      };
        document.addEventListener('keydown', keyDownHandler);
  
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, [guess, round]);





    const renderInput = (name, status) => (
      <input
        type="text"
        name={name}
        onChange={changeHandler}
        className={`${tileStyle} ${status == "Right" ? correctStyle : ""} ${status === "Close" ? closeStyle : ""} ${status === "Incorrect" ? incorrectStyle : ""}`}
        maxLength="1"
        value={guess[name]}
      />
    );

    const checkWords = () =>{
      
      setTimeout(() => {
        setRound(round+1);
      }, 3);

      let guessArr = Object.values(guess)
      if (round==1){
        for (let i = 0; i < 5; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i]){
                letterStatus[`r${i}`]="Right"
                setTimeout(() => {
                  setLetterStatus({ ...letterStatus });
                }, 0);
                console.log("Right",guessArr[i],word[i])
              }else{
                letterStatus[`r${i}`]="Close"
                setTimeout(() => {
                  setLetterStatus({ ...letterStatus });
                }, 0);

                console.log("Close",guessArr[i],word[i])
              }
            }else{
              letterStatus[`r${i}`]="Incorrect"
              setTimeout(() => {
                setLetterStatus({ ...letterStatus });
              }, 0);
              console.log("no",guessArr[i],word[i])
            }
        }
        
      }
      console.log(round)
      if (round==2){
        for (let i = 5; i < 10; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i]){
                letterStatus[`r${i}`]="Right"
                setTimeout(() => {
                  setLetterStatus({ ...letterStatus });
                }, 0);
                console.log("Right",guessArr[i],word[i])
              }else{
                letterStatus[`r${i}`]="Close"
                setTimeout(() => {
                  setLetterStatus({ ...letterStatus });
                }, 0);

                console.log("Close",guessArr[i],word[i])
              }
            }else{
              letterStatus[`r${i}`]="Incorrect"
              setTimeout(() => {
                setLetterStatus({ ...letterStatus });
              }, 0);
              console.log("no",guessArr[i],word[i])
            }
        }
        
      }
      
      
    }
  return (
    <>
        <Nav />
        
        
          <div className="flex w-4/5 justify-center my-2">
          {renderInput("r0", letterStatus.r0)}
          {renderInput("r1", letterStatus.r1)}
          {renderInput("r2", letterStatus.r2)}
          {renderInput("r3", letterStatus.r3)}
          {renderInput("r4", letterStatus.r4)}
          </div>
          <div className="flex w-4/5 justify-center my-2">
          {renderInput("r5", letterStatus.r5)}
          {renderInput("r6", letterStatus.r6)}
          {renderInput("r7", letterStatus.r7)}
          {renderInput("r8", letterStatus.r8)}
          {renderInput("r9", letterStatus.r9)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
          {renderInput("r10", letterStatus.r10)}
          {renderInput("r11", letterStatus.r11)}
          {renderInput("r12", letterStatus.r12)}
          {renderInput("r13", letterStatus.r13)}
          {renderInput("r14", letterStatus.r14)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
          {renderInput("r15", letterStatus.r15)}
          {renderInput("r16", letterStatus.r16)}
          {renderInput("r17", letterStatus.r17)}
          {renderInput("r18", letterStatus.r18)}
          {renderInput("r19", letterStatus.r19)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
          {renderInput("r20", letterStatus.r20)}
          {renderInput("r21", letterStatus.r21)}
          {renderInput("r22", letterStatus.r22)}
          {renderInput("r23", letterStatus.r23)}
          {renderInput("r24", letterStatus.r24)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
          {renderInput("r25", letterStatus.r25)}
          {renderInput("r26", letterStatus.r26)}
          {renderInput("r27", letterStatus.r27)}
          {renderInput("r28", letterStatus.r28)}
          {renderInput("r29", letterStatus.r29)}
          </div>
          
    </>
  )
}

export default Words
