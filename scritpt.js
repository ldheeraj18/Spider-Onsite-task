let operation = document.querySelector('.operation');
let operand = document.querySelector('.operand');
let buttons = document.querySelectorAll('button');
let operators = ['/', '*', '+', '+', '-', '%'];
let calculation = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if (buttonText === "pi") {
            buttonText = Math.PI;

        }
        if (buttonText === "e")
            buttonText = Math.E;
        if (buttonText === 'C') {
            operand.innerText = "";
            operation.innerText = "";
            calculation = '';
        }
        else if (buttonText === '=') {
            calculation = operation.innerText + operand.innerText;
            operation.innerText = "";
            operand.innerText = eval(calculation);
            calculation = '';
        }
        else if (buttonText === "sin") {
            calculation = operation.innerText + operand.innerText;
            calculation = Math.sin(eval(calculation));
            operation.innerText = "";
            operand.innerText = calculation;
            calculation = ''
        }
        else if (buttonText === "tan") {
            calculation = operation.innerText + operand.innerText;
            calculation = Math.tan(eval(calculation));
            operation.innerText = "";
            operand.innerText = calculation;
            calculation = ''
        }
        else if (buttonText === "cos") {
            calculation = operation.innerText + operand.innerText;
            calculation = Math.cos(eval(calculation));
            operation.innerText = "";
            operand.innerText = calculation;
            calculation = ''
        }
        else if (buttonText === "ln") {
            calculation = operation.innerText + operand.innerText;
            calculation = Math.log(eval(calculation));
            operation.innerText = "";
            operand.innerText = calculation;
            calculation = ''
        }
        else if (buttonText === "sqrt") {
            calculation = operation.innerText + operand.innerText;
            calculation = Math.pow(eval(calculation), 1 / 2);
            operation.innerText = "";
            operand.innerText = calculation;
            calculation = ''
        }
        else if (buttonText === "x!") {
            calculation = operation.innerText + operand.innerText;
            calculation = eval(calculation);
            let f = 1;
            for (let i = 1; i <= calculation; i++)
                f = f * i;
            calculation = f;
            operation.innerText = "";
            operand.innerText = calculation;
            calculation = ''
        }
        else {
            calculation += buttonText;
            for (let val of operators) {
                if (buttonText === val) {
                    calculation = operation.innerText + calculation;
                    operation.innerText = calculation;
                    operand.innerText = "";
                    calculation = '';
                }
            }
            operand.innerText = calculation;
        }
    })
}