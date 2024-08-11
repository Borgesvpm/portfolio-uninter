class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement; // Elemento de texto para exibir o operando anterior
        this.currentOperandTextElement = currentOperandTextElement; // Elemento de texto para exibir o operando atual
        this.clear(); // Inicializa a calculadora limpando os operandos
    }

    clear() {
        this.currentOperand = ""; // Limpa o operando atual
        this.previousOperand = ""; // Limpa o operando anterior
        this.operation = undefined; // Reseta a operação
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1); // Remove o último dígito do operando atual
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return; // Impede múltiplos pontos decimais
        this.currentOperand = this.currentOperand.toString() + number.toString(); // Anexa o número ao operando atual
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return; // Impede a escolha de uma operação sem um operando atual

        if (this.previousOperand !== "") {
            this.compute(); // Computa o resultado da operação anterior antes de escolher a nova operação
        }
        this.operation = operation; // Define a operação atual
        this.previousOperand = this.currentOperand; // Move o operando atual para o anterior
        this.currentOperand = ""; // Limpa o operando atual
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand); // Converte o operando anterior para float
        const current = parseFloat(this.currentOperand); // Converte o operando atual para float
        if (isNaN(prev) || isNaN(current)) return; // Verifica se os operandos são válidos números

        switch (this.operation) { // Executa a operação com base na operação escolhida
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "÷":
                computation = prev / current;
                break;
            default:
                return; // Sai se a operação não for válida
        }
        this.currentOperand = computation; // Armazena o resultado no operando atual
        this.operation = undefined; // Reseta a operação
        this.previousOperand = ""; // Limpa o operando anterior
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]); // Obtém a parte inteira do número
        const decimalDigits = stringNumber.split(".")[1]; // Obtém a parte decimal do número
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ""; // Exibe vazio se não houver dígitos inteiros
        } else {
            integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 }); // Formata os dígitos inteiros com separadores de milhar
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`; // Retorna o número formatado com a parte decimal
        } else {
            return integerDisplay; // Retorna apenas a parte inteira se não houver decimal
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand); // Atualiza a exibição do operando atual
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`; // Exibe o operando anterior e a operação
        } else {
            this.previousOperandTextElement.innerText = ""; // Limpa a exibição do operando anterior se não houver operação
        }
    }
}

// Seleciona elementos do DOM
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

// Instancia a classe Calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText); // Adiciona o número clicado ao operando atual
        calculator.updateDisplay(); // Atualiza a exibição da calculadora
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText); // Escolhe a operação clicada
        calculator.updateDisplay(); // Atualiza a exibição da calculadora
    });
});

equalsButton.addEventListener("click", button => {
    calculator.compute(); // Realiza o cálculo
    calculator.updateDisplay(); // Atualiza a exibição da calculadora
});

allClearButton.addEventListener("click", button => {
    calculator.clear(); // Limpa todos os operandos e a operação
    calculator.updateDisplay(); // Atualiza a exibição da calculadora
});

deleteButton.addEventListener("click", button => {
    calculator.delete(); // Deleta o último dígito do operando atual
    calculator.updateDisplay(); // Atualiza a exibição da calculadora
});
