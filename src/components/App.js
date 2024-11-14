import Calculator from './Calculator.js';

export default function App() {
    const screen = document.getElementById('screen');
    const calculator = new Calculator(screen);
    const buttons = document.querySelectorAll('.button');

    const themeToggleButton = document.getElementById('theme-toggle');
    const calculatorContainer = document.querySelector('.calculator');

    if (localStorage.getItem('theme') === 'dark') {
        calculatorContainer.classList.add('dark');
        themeToggleButton.style.backgroundColor = '#535353';
    } else {
        calculatorContainer.classList.add('light');
        themeToggleButton.style.backgroundColor = '#fff';
    }

    themeToggleButton.addEventListener('click', () => {
        calculatorContainer.classList.toggle('dark');
        calculatorContainer.classList.toggle('light');

        if (calculatorContainer.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.style.backgroundColor = '#535353';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.style.backgroundColor = '#fff';
        }
    });

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
