// src/ConfettiButton.tsx

interface ConfettiButtonProps {
    onClick: () => void;
    label: string;
    color?: 'yellow' | 'red';
}

export function ConfettiButton({onClick, label, color = 'yellow'}: 
    ConfettiButtonProps) {

    const colorVariants = {
        yellow: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
        red: 'bg-red-500 hover:bg-red-600 text-white',
      };


    return (
        <button
            onClick={onClick}
            className={`${colorVariants[color]} m-2 font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95`}
        >
            {label}
        </button>
    )
}