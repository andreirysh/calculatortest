import Calculator from './Calculator.js'

export default function App() {
    const screen = document.getElementById('screen');
    const calculator = new Calculator(screen);
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (!isNaN(value)) {
                calculator.appendNumber(value);
            } else if (value === ',') {
                calculator.appendNumber(',');
            } else if (value === 'sign') {
                calculator.toggleSign();
            } else if (value === 'clear') {
                calculator.reset();
            } else if (value === '=') {
                calculator.compute();
            } else {
                calculator.chooseOperation(value);
            }
        });
    });
}
