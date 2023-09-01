import React, {useState, useEffect} from 'react'
import Nav from './Nav'

const Words = () => {
    const tileStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold focus:outline-none focus:border-gray-500 caret-transparent"
    const incorrectStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#3A3A3C] caret-transparent"
    const closeStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#B59F3B] caret-transparent"
    const correctStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#538D4E] caret-transparent"
    const [guess, setGuess] = useState("")
    const [round,setRound] = useState(0)
    const [ letter, setLetter] = useState({
      r0: "", r1: "", r2: "", r3: "", r4: "",
      r5: "", r6: "", r7: "", r8: "", r9: "",
      r10: "", r11: "", r12: "", r13: "", r14: "",
      r15: "", r16: "", r17: "", r18: "", r19: "",
      r20: "", r21: "", r22: "", r23: "", r24: "",
      r25: "", r26: "", r27: "", r28: "", r29: ""
    });
    const [letterStatus, setLetterStatus] = useState({
      r0_status: false, r1_status: true, r2_status: true, r3_status: true, r4_status: true,
      r5_status: true, r6_status: true, r7_status: true, r8_status: true, r9_status: true,
      r10_status: true, r11_status: true, r12_status: true, r13_status: true, r14_status: true,
      r15_status: true, r16_status: true, r17_status: true, r18_status: true, r19_status: true,
      r20_status: true, r21_status: true, r22_status: true, r23_status: true, r24_status: true,
      r25_status: true, r26_status: true, r27_status: true, r28_status: true, r29_status: true
    });
    let word = "House"
    word = word.toUpperCase().split("")
    
    


    const changeHandler = event => {
      setGuess({...guess, [event.target.name]: event.target.value.toUpperCase()})
      if(event.target.value.length == 1){
        if(event.target.nextSibling != null){
          letterStatus[event.target.name+"_status"] = true
          event.target.nextElementSibling.focus()
          letterStatus[event.target.nextElementSibling.name+"_status"] = false

        }
      }else{
        if(event.target.previousSibling != null){
          letterStatus[event.target.name+"_status"] = true
          event.target.previousElementSibling.focus()
          letterStatus[event.target.previousSibling.name+"_status"] = false
        }
      }
    }
    
    useEffect(() => {
      const keyDownHandler = event => {
        if (event.keyCode===8 && event.target.value.length == 0 && event.target.previousElementSibling !=null) {
            event.target.previousElementSibling.focus()
          
        }

        
        if (event.key === 'Enter') {
          setRound(round+1)
          
        }
      };
        document.addEventListener('keydown', keyDownHandler);
  
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, [guess]);

    useEffect(() => {
      if (round > 0) {
        checkWords();
      }
    }, [round]);



    const renderInput = (name, status, ls) => (
      
      <input
        type="text"
        name={name}
        onChange={changeHandler}
        className={`${tileStyle} ${status === "Right" ? correctStyle : ""} ${status === "Close" ? closeStyle : ""} ${status === "Incorrect" ? incorrectStyle : ""}`}
        maxLength="1"
        value={guess[name]}
        readOnly={ls}
      />
    );

    const checkWords = () =>{
      
      let guessArr = Object.values(guess)
      if (round==1){
        for (let i = 0; i < 5; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i]){
                letter[`r${i}`]="Right"
                // letterStatus[`r${i}_status`] = true
                  setLetter({ ... letter });
              }else{
                letter[`r${i}`]="Close"
                setLetter({ ... letter });
              }
            }else{
              letter[`r${i}`]="Incorrect"
                setLetter({ ... letter });
            }
        }
        
      }else if (round==2){
        for (let i = 5; i < 10; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i-5]){
                letter[`r${i}`]="Right"
                setLetter({ ... letter });
              }else{
                letter[`r${i}`]="Close"
                setLetter({ ... letter });
              }
            }else{
              letter[`r${i}`]="Incorrect"
              setLetter({ ... letter });
            }
        }
      }else if (round==3){
          for (let i = 10; i < 15; i++){
              if(word.includes(guessArr[i])){
                if(guessArr[i] == word[i-10]){
                  letter[`r${i}`]="Right"
                  setLetter({ ... letter });
                }else{
                  letter[`r${i}`]="Close"
                  setLetter({ ... letter });
                }
              }else{
                letter[`r${i}`]="Incorrect"
                setLetter({ ... letter });
              }
          }
        }else if (round==4){
        for (let i = 15; i < 20; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i-15]){
                letter[`r${i}`]="Right"
                setLetter({ ... letter });
              }else{
                letter[`r${i}`]="Close"
                setLetter({ ... letter });
              }
            }else{
              letter[`r${i}`]="Incorrect"
              setLetter({ ... letter });
            }
        }
      }else if (round==5){
          for (let i = 20; i < 25; i++){
              if(word.includes(guessArr[i])){
                if(guessArr[i] == word[i-20]){
                  letter[`r${i}`]="Right"
                  setLetter({ ... letter });
                }else{
                  letter[`r${i}`]="Close"
                  setLetter({ ... letter });
                }
              }else{
                letter[`r${i}`]="Incorrect"
                setLetter({ ... letter });
              }
          }
        }else if (round==6){
            for (let i = 25; i < 30; i++){
                if(word.includes(guessArr[i])){
                  if(guessArr[i] == word[i-25]){
                    letter[`r${i}`]="Right"
                    setLetter({ ... letter });
                  }else{
                    letter[`r${i}`]="Close"
                    setLetter({ ... letter });
                  }
                }else{
                  letter[`r${i}`]="Incorrect"
                  setLetter({ ... letter });
                }
            }
        
      }
      
      
    }
  return (
    <>
        <Nav />
        
        
          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r0",  letter.r0, letterStatus.r0_status)}
            {renderInput("r1",  letter.r1, letterStatus.r1_status)}
            {renderInput("r2",  letter.r2, letterStatus.r2_status)}
            {renderInput("r3",  letter.r3, letterStatus.r3_status)}
            {renderInput("r4",  letter.r4, letterStatus.r4_status)}
          </div>
          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r5",  letter.r5, letterStatus.r5_status)}
            {renderInput("r6",  letter.r6, letterStatus.r6_status)}
            {renderInput("r7",  letter.r7, letterStatus.r7_status)}
            {renderInput("r8",  letter.r8, letterStatus.r8_status)}
            {renderInput("r9",  letter.r9, letterStatus.r9_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r10",  letter.r10, letterStatus.r10_status)}
            {renderInput("r11",  letter.r11, letterStatus.r11_status)}
            {renderInput("r12",  letter.r12, letterStatus.r12_status)}
            {renderInput("r13",  letter.r13, letterStatus.r13_status)}
            {renderInput("r14",  letter.r14, letterStatus.r14_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r15",  letter.r15, letterStatus.r15_status)}
            {renderInput("r16",  letter.r16, letterStatus.r16_status)}
            {renderInput("r17",  letter.r17, letterStatus.r17_status)}
            {renderInput("r18",  letter.r18, letterStatus.r18_status)}
            {renderInput("r19",  letter.r19, letterStatus.r19_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r20",  letter.r20, letterStatus.r20_status)}
            {renderInput("r21",  letter.r21, letterStatus.r21_status)}
            {renderInput("r22",  letter.r22, letterStatus.r22_status)}
            {renderInput("r23",  letter.r23, letterStatus.r23_status)}
            {renderInput("r24",  letter.r24, letterStatus.r24_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r25",  letter.r25, letterStatus.r25_status)}
            {renderInput("r26",  letter.r26, letterStatus.r26_status)}
            {renderInput("r27",  letter.r27, letterStatus.r27_status)}
            {renderInput("r28",  letter.r28, letterStatus.r28_status)}
            {renderInput("r29",  letter.r29, letterStatus.r29_status)}
          </div>
          
    </>
  )
}

export default Words
