import Calculator from './Calculator.js'

export default function App() {
    const screen = document.getElementById('screen')
    const calculator = new Calculator(screen)

    document.querySelectorAll('.button').forEach((btn) =>
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value')
            if (!isNaN(value)) calculator.appendNumber(value)
            else if (value === 'clear') calculator.reset()
            else if (value === '=') calculator.compute()
            else calculator.chooseOperation(value)
        })
    )
}
