function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    var input = document.getElementById("display");
    var value = input.value;
    input.value = value.slice(0, value.length - 1);
}

const calculate = () => {
    const display = document.getElementById('display').value;
    const operator = ['+', '-', '*', '/', '%'];
    const operand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log("for loop started");

    let numbers = [];
    let ops = [];

    let currentNumber = '';

    for (let i = 0; i < display.length; i++) {
        if (operator.includes(display[i])) {
            if (currentNumber !== '') {
                numbers.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            ops.push(display[i]);
        }
        else if (operand.includes(parseInt(display[i])) || display[i] === '.') {
            currentNumber += display[i];
        }

        else {
            console.log(display[i] + ' is not correct');
        }
        console.log({ currentNumber });
    }

    if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
        currentNumber = '';

    }

    let result = numbers[0];

    for (let i = 0; i < ops.length; i++) {
        const operator = ops[i];
        const number = numbers[i + 1];

        switch (operator) {
            case '+':
                result = result + number;
                break;
            case '-':
                result = result - number;
                break;
            case '*':
                result = result * number;
                break;
            case '/':
                result = result / number;
                break;
            case '%':
                result = result % number;
                break;
            default:
                console.log('Invalid operator');
                return;
        }
    }

    document.getElementById('display').value = result;
}
