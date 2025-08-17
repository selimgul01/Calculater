import React, { useEffect, useState } from 'react'
import Display from './Display'
import ButtonsContainer from './ButtonsContainer'
import * as math from "mathjs"
import HistoryModal from './HistoryModal'

const Calculator = () => {

  const [value,setValue] = useState("")
  const [result,setResult] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([])


  const handleClick = (val) => {
    setValue((prev)=> [ ...prev, val ]) 
  }


  useEffect(()=>{
    const savedHistory = JSON.parse(localStorage.getItem("calculated")) || []
    setHistory(savedHistory)
  },[])

  useEffect(()=>{
    localStorage.setItem("calculated", JSON.stringify(history))
  },[history])

  const calculate = () => {
    const input = value.join("")
    setResult(math.evaluate(input))
    setHistory((prev) => [ input + " = " + math.evaluate(input), ...prev])
    setValue("")
  }

  const clearHandler = () => {
    setValue("")
    setResult("") 
  }


  return (
    <div className='w-[423px] h-[858px] rounded-[40px] border bg-white flex flex-col dark:bg-gradient-to-r dark:from-[#373737] dark:via-[#252628]  dark:to-[#000309]'>
      <Display value = {value} result = {result} setIsOpen = {setIsOpen} />
      <ButtonsContainer setValue = {setValue} setResult = {setResult} handleClick = {handleClick} clearHandler = {clearHandler} calculate = {calculate} />
      <HistoryModal isOpen={isOpen} history = {history} setIsOpen = {setIsOpen}  />
      
    </div>
  )
}

export default Calculator
