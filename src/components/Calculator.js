export default class Calculator {
    constructor(screen) {
        this.screen = screen
        this.reset()
    }

    reset() {
        this.currentValue = '0'
        this.prevValue = null
        this.operation = null
        this.updateScreen()
    }

    appendNumber(number) {
        if (number === ',') {
            if (!this.currentValue.includes('.')) {
                this.currentValue = this.currentValue === '' || this.currentValue === '0' ? '0.' : this.currentValue + '.';
            }
        } else {
            if (this.currentValue === '0') {
                this.currentValue = number;
            } else {
                this.currentValue += number;
            }
        }
        this.updateScreen();
    }

    chooseOperation(op) {
        if (this.currentValue === '') return
        if (this.prevValue) this.compute()
        this.operation = op
        this.prevValue = this.currentValue
        this.currentValue = ''
    }

    compute() {
        const prev = parseFloat(this.prevValue)
        const curr = parseFloat(this.currentValue)
        switch (this.operation) {
            case '+':
                this.currentValue = (prev + curr).toString()
                break
            case '-':
                this.currentValue = (prev - curr).toString()
                break
            case '*':
                this.currentValue = (prev * curr).toString()
                break
            case '/':
                this.currentValue = curr ? (prev / curr).toString() : 'Error'
                break
            case '%':
                this.currentValue = (prev * (curr / 100)).toString()
                break
            default:
                return
        }
        this.prevValue = null
        this.operation = null
        this.updateScreen()
    }

    updateScreen() {
        this.screen.innerText = this.currentValue.replace('.', ',');
        this.adjustFontSize();
    }

    adjustFontSize() {
        const maxLength = 8;
        if (this.currentValue.length > maxLength) {
            this.screen.style.fontSize = '2em';
        } else {
            this.screen.style.fontSize = '3em';
        }
    }
}  