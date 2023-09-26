import React, {useState, useEffect, useRef} from 'react'
import Nav from './Nav'
import axios from 'axios'

let word = ""
const Words = () => {
    
    const tileStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold focus:outline-none focus:border-gray-500 caret-transparent"
    const incorrectStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#3A3A3C] caret-transparent"
    const closeStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#B59F3B] caret-transparent"
    const correctStyle = "mx-1 border-solid border-2 border-gray-300 w-20 h-20 text-5xl text-center font-bold bg-[#538D4E] caret-transparent"
    const [guess, setGuess] = useState("")
    const [round,setRound] = useState(0)
    const [ letterStatus, setLetterStatus] = useState({
      r0: "", r1: "", r2: "", r3: "", r4: "",
      r5: "", r6: "", r7: "", r8: "", r9: "",
      r10: "", r11: "", r12: "", r13: "", r14: "",
      r15: "", r16: "", r17: "", r18: "", r19: "",
      r20: "", r21: "", r22: "", r23: "", r24: "",
      r25: "", r26: "", r27: "", r28: "", r29: ""
    });
    const [inputStatus, setInputStatus] = useState({
      r0_status: false, r1_status: true, r2_status: true, r3_status: true, r4_status: true,
      r5_status: true, r6_status: true, r7_status: true, r8_status: true, r9_status: true,
      r10_status: true, r11_status: true, r12_status: true, r13_status: true, r14_status: true,
      r15_status: true, r16_status: true, r17_status: true, r18_status: true, r19_status: true,
      r20_status: true, r21_status: true, r22_status: true, r23_status: true, r24_status: true,
      r25_status: true, r26_status: true, r27_status: true, r28_status: true, r29_status: true
    });
    

    const changeHandler = event => {
      setGuess({...guess, [event.target.name]: event.target.value.toUpperCase()})
      if(event.target.value.length == 1){
        if(event.target.nextSibling != null){
          inputStatus[event.target.name+"_status"] = true
          event.target.nextElementSibling.focus()
          inputStatus[event.target.nextElementSibling.name+"_status"] = false

        }
      }else{
        if(event.target.previousSibling != null){
          inputStatus[event.target.name+"_status"] = true
          event.target.previousElementSibling.focus()
          inputStatus[event.target.previousSibling.name+"_status"] = false
        }
      }
    }
    useEffect(()=>{
      const controller = new AbortController()
      const options = {
        params: {'letterPattern': '^[a-z]{5}$',
                  'random': true
                },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_api_key,
          'X-RapidAPI-Host': import.meta.env.VITE_host
                  },
        signal: controller.signal
      }
      axios.get("https://wordsapiv1.p.rapidapi.com/words/", options)
        .then((response)=>{
          console.log(response)
          word = response.data.word.toUpperCase().split("")
          document.querySelector("[name='r0']").focus()
          console.log(word)
          })
          .catch((error)=>{
            
          })
          return () => controller.abort() 
        
        },[])

    useEffect(() => {
      const keyDownHandler = event => {
        
        if (event.keyCode===8 && event.target.value.length == 0 && event.target.previousElementSibling !=null) {
          inputStatus[event.target.name+"_status"] = true
          inputStatus[event.target.previousSibling.name+"_status"] = false
          event.target.previousSibling.value = ""
          guess[event.target.previousSibling.name]=""
          setGuess({ ... guess })
          event.target.previousElementSibling.focus()
          
        }

        
        if (event.key === 'Enter') {
          if (Object.keys(guess).length % 5 == 0 && Object.keys(guess).length !=  0){
            
            let spellingArr = Object.values(guess)
            isWordValid(spellingArr.slice(Object.keys(guess).length-5).join(""))
            
            }else{
            alert("Please enter a 5 letter word") //will be replaced with a modal in future
          }
          
        }
      };
        document.addEventListener('keydown', keyDownHandler);
  
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, [guess]);

    useEffect(() => {
      
      if (round > 0) {
        let guessArr = Object.values(guess)
        
        
        checkWords(guessArr);
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
    
    const isWordValid = word =>{
      const options = {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_api_key,
          'X-RapidAPI-Host': import.meta.env.VITE_host
                  }
        
      }
        axios.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`, options)
        .then((response)=>{
          
            setRound(round+1)
            inputStatus[event.target.name+"_status"] = true
            inputStatus[`r${Object.keys(guess).length}_status`] = false
            document.querySelector(`[name=r${Object.keys(guess).length}]`).focus()  
        })
        .catch((error)=>{
          alert("Not a word")
        })

      }
    


    const checkWords = (guessArr) =>{
      
      
      if (round==1){
        for (let i = 0; i < 5; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i]){
                letterStatus[`r${i}`]="Right"
                setLetterStatus({ ... letterStatus });
              }else{
                letterStatus[`r${i}`]="Close"
                setLetterStatus({ ... letterStatus });
              }
            }else{
              letterStatus[`r${i}`]="Incorrect"
                setLetterStatus({ ... letterStatus });
            }
        }
        
      }else if (round==2){
        for (let i = 5; i < 10; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i-5]){
                letterStatus[`r${i}`]="Right"
                setLetterStatus({ ... letterStatus });
              }else{
                letterStatus[`r${i}`]="Close"
                setLetterStatus({ ... letterStatus });
              }
            }else{
              letterStatus[`r${i}`]="Incorrect"
              setLetterStatus({ ... letterStatus });
            }
        }
      }else if (round==3){
          for (let i = 10; i < 15; i++){
              if(word.includes(guessArr[i])){
                if(guessArr[i] == word[i-10]){
                  letterStatus[`r${i}`]="Right"
                  setLetterStatus({ ... letterStatus });
                }else{
                  letterStatus[`r${i}`]="Close"
                  setLetterStatus({ ... letterStatus });
                }
              }else{
                letterStatus[`r${i}`]="Incorrect"
                setLetterStatus({ ... letterStatus });
              }
          }
        }else if (round==4){
        for (let i = 15; i < 20; i++){
            if(word.includes(guessArr[i])){
              if(guessArr[i] == word[i-15]){
                letterStatus[`r${i}`]="Right"
                setLetterStatus({ ... letterStatus });
              }else{
                letterStatus[`r${i}`]="Close"
                setLetterStatus({ ... letterStatus });
              }
            }else{
              letterStatus[`r${i}`]="Incorrect"
              setLetterStatus({ ... letterStatus });
            }
        }
      }else if (round==5){
          for (let i = 20; i < 25; i++){
              if(word.includes(guessArr[i])){
                if(guessArr[i] == word[i-20]){
                  letterStatus[`r${i}`]="Right"
                  setLetterStatus({ ... letterStatus });
                }else{
                  letterStatus[`r${i}`]="Close"
                  setLetterStatus({ ... letterStatus });
                }
              }else{
                letterStatus[`r${i}`]="Incorrect"
                setLetterStatus({ ... letterStatus });
              }
          }
        }else if (round==6){
            for (let i = 25; i < 30; i++){
                if(word.includes(guessArr[i])){
                  if(guessArr[i] == word[i-25]){
                    letterStatus[`r${i}`]="Right"
                    setLetterStatus({ ... letterStatus });
                  }else{
                    letterStatus[`r${i}`]="Close"
                    setLetterStatus({ ... letterStatus });
                  }
                }else{
                  letterStatus[`r${i}`]="Incorrect"
                  setLetterStatus({ ... letterStatus });
                }
            }
        
      }
      
      
    }
  return (
    <>
        <Nav />
        
        
          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r0",  letterStatus.r0, inputStatus.r0_status)}
            {renderInput("r1",  letterStatus.r1, inputStatus.r1_status)}
            {renderInput("r2",  letterStatus.r2, inputStatus.r2_status)}
            {renderInput("r3",  letterStatus.r3, inputStatus.r3_status)}
            {renderInput("r4",  letterStatus.r4, inputStatus.r4_status)}
          </div>
          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r5",  letterStatus.r5, inputStatus.r5_status)}
            {renderInput("r6",  letterStatus.r6, inputStatus.r6_status)}
            {renderInput("r7",  letterStatus.r7, inputStatus.r7_status)}
            {renderInput("r8",  letterStatus.r8, inputStatus.r8_status)}
            {renderInput("r9",  letterStatus.r9, inputStatus.r9_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r10",  letterStatus.r10, inputStatus.r10_status)}
            {renderInput("r11",  letterStatus.r11, inputStatus.r11_status)}
            {renderInput("r12",  letterStatus.r12, inputStatus.r12_status)}
            {renderInput("r13",  letterStatus.r13, inputStatus.r13_status)}
            {renderInput("r14",  letterStatus.r14, inputStatus.r14_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r15",  letterStatus.r15, inputStatus.r15_status)}
            {renderInput("r16",  letterStatus.r16, inputStatus.r16_status)}
            {renderInput("r17",  letterStatus.r17, inputStatus.r17_status)}
            {renderInput("r18",  letterStatus.r18, inputStatus.r18_status)}
            {renderInput("r19",  letterStatus.r19, inputStatus.r19_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r20",  letterStatus.r20, inputStatus.r20_status)}
            {renderInput("r21",  letterStatus.r21, inputStatus.r21_status)}
            {renderInput("r22",  letterStatus.r22, inputStatus.r22_status)}
            {renderInput("r23",  letterStatus.r23, inputStatus.r23_status)}
            {renderInput("r24",  letterStatus.r24, inputStatus.r24_status)}
          </div>

          <div className="flex w-4/5 justify-center my-2">
            {renderInput("r25",  letterStatus.r25, inputStatus.r25_status)}
            {renderInput("r26",  letterStatus.r26, inputStatus.r26_status)}
            {renderInput("r27",  letterStatus.r27, inputStatus.r27_status)}
            {renderInput("r28",  letterStatus.r28, inputStatus.r28_status)}
            {renderInput("r29",  letterStatus.r29, inputStatus.r29_status)}
          </div>
          
    </>
  )
}

export default Words
