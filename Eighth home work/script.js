class Calculator {

    constructor(previousNumber, currentNumber) {
      this.previousNumber = previousNumber
      this.currentNumber = currentNumber
      this.clear()
    }
  
    clear() {
      this.currentElem = ''
      this.previousElem = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentElem = this.currentElem.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentElem.includes('.')) return
      this.currentElem = this.currentElem.toString() + number.toString()
    }
  
    operationClick(operation) {
      if (this.currentElem === '') return
      if (this.previousElem !== '') {
        this.action()
      }
      this.operation = operation
      this.previousElem = this.currentElem
      this.currentElem = ''
    }
  
    action() {
      let action
      
      const prev = parseFloat(this.previousElem)
      const current = parseFloat(this.currentElem)
     
      if (isNaN(prev) || isNaN(current)) return
     
      switch (this.operation) {
        case '+':
          action = prev + current
          break
        case '-':
          action = prev - current
          break
        case '*':
          action = prev * current
          break
        case '÷':
          action = prev / current
          break
        default:
          return
      }
      this.currentElem = action
      this.operation = undefined
      this.previousElem = ''
    }
  
  render() {
      this.currentNumber.innerText = this.output(this.currentElem) ;
      if (this.operation != null) {
       this.previousNumber.innerText = `${this.output(this.previousElem)} ${this.operation}`
            } else {
        this.previousNumber.innerText = ''
      }
    }
    
  output(number) {
      const stringNumber = number.toString();
      if (stringNumber != null) {
      let numOutput = number.toLocaleString('ru', {maximumFractionDigits: 8 });
        return `${numOutput}`
      }else {
        return stringNumber
      }
    }
    
  reverse() {
    return this.currentElem = this.currentElem * -1
  }
  }
  
  const numberButtons = document.querySelectorAll('.number');
  const operationButtons = document.querySelectorAll('.operation');
  const result = document.querySelector('.result');
  const deleteBtn = document.querySelector('.delete');
  const clear = document.querySelector('.clear');
  const previousNumber= document.querySelector('.previousNumber');
  const currentNumber = document.querySelector('.currentNumber');
  const reverseNum = document.querySelector('.operation-reverse');
  
  const calculator = new Calculator(previousNumber, currentNumber);
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.render()
    });
  });
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.operationClick(button.innerText)
      calculator.render()
    });
  });
 
  result.addEventListener('click', button => {
    calculator.action()
    calculator.render()
  });
  
  clear.addEventListener('click', button => {
    calculator.clear()
    calculator.render()
  });
  
  deleteBtn.addEventListener('click', button => {
    calculator.delete()
    calculator.render()
  });

  reverseNum.addEventListener('click', button => {
    calculator.reverse()
    calculator.render()
  });
