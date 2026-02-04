import { useState } from 'react'
import confetti from 'canvas-confetti'
import {ConfettiButton} from './ConfettiButton'

function App() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const buttons = ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  
  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num); // Replace '0' with the number
    } else {
      setDisplay(display + num); // Append: "1" + "2" = "12"
    }
  };

  const handleOperator = (op: string) => {
    setFirstNumber(parseFloat(display)); // Save current number
    setOperator(op);                     // Save instruction
    setDisplay('0');                     // Reset screen for next number
  };

  const handleEqual = () => {
    // If we are missing data, do nothing
    if (firstNumber === null || operator === null) return;

    const currentNumber = parseFloat(display);
    let result = 0;

    // The Logic Switch
    switch (operator) {
      case '+': result = firstNumber + currentNumber; break;
      case '-': result = firstNumber - currentNumber; break;
      case '×': result = firstNumber * currentNumber; break;
      case '÷': result = firstNumber / currentNumber; break;
    }

    setDisplay(result.toString()); // Show answer
    setFirstNumber(null);          // Reset storage
    setOperator(null);             // Reset operator
  };

  const handleButtonClick = (btn: string) => {
    if (btn === 'C') {
      setDisplay('0');
      setFirstNumber(null);
      setOperator(null);
      return;
    }

    if (btn === '=') {
      handleEqual();

      confetti({
        particleCount: 400,
        spread: 150,
        origin: { y: 0.5 }
      })
      return;
    }

    if (['+', '-', '×', '÷'].includes(btn)) {
      handleOperator(btn);
      return;
    }

    // If it's none of the above, it must be a number (or dot)
    handleNumber(btn);
  };