import { useState } from 'react'
import confetti from 'canvas-confetti'

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const buttons = ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setFirstNumber(parseFloat(display));
    setOperator(op);
    setDisplay('0');
  };

  const handleEqual = () => {
    if (firstNumber === null || operator === null) return;
    const currentNumber = parseFloat(display);
    let result = 0;
    switch (operator) {
      case '+': result = firstNumber + currentNumber; break;
      case '-': result = firstNumber - currentNumber; break;
      case '×': result = firstNumber * currentNumber; break;
      case '÷': result = firstNumber / currentNumber; break;
    }
    setDisplay(result.toString());
    setFirstNumber(null);
    setOperator(null);
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
      });
      return;
    }
    if (['+', '-', '×', '÷'].includes(btn)) {
      handleOperator(btn);
      return;
    }
    handleNumber(btn);
  };

  return (
    <div className="text-center">
      <div className="bg-green-500 p-6 rounded-lg shadow-2xl w-200 flex flex-col gap-4 scale-50">
        <div className="bg-gray-800 text-white text-4xl p-4 rounded-lg text-right font-mono h-20 flex items-center justify-end">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className={`${btn === '0' || btn === '=' ? 'col-span-2' : ''} bg-gray-700 hover:bg-gray-600 text-white font-bold p-4 rounded-lg`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator