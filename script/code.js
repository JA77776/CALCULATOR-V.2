class Calculator {
    constructor(previousOperandButtonsTextElement, currentOperandButtonsTextElement ) {
        this.previousOperandButtonsTextElement  = previousOperandButtonsTextElement
        this.currentOperandButtonsTextElement = currentOperandButtonsTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){


    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()


    }
    chooseOperation(Operation){
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute(){


    }
    updateDisplay(){
        this.currentOperandButtonsTextElement.innerText = this.currentOperand
        this.previousOperandButtonsTextElement.innerText = this.previousOperand


    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandButtonsTextElement = document.querySelector('[data-previous-operand]')
const currentOperandButtonsTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

})