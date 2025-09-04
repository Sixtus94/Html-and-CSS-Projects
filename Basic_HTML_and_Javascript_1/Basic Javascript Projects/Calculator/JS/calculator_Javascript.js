//creating an object to keep track of my values
const calculator = {
    //This will display 0 on the calculator screen.
    Display_value: '0',
    //This will hold the first operand for any expressions, I set to null for now.
    First_operand: null,
    //This checks wether or not the second operand has been inputted by the user.
    wait_second_operand: false,
    //This will hold the operator, set to null for now.
    operator: null,  
};

//This modifies values each time a button is clicked on.
function Input_Digit(Digit) {
    const {Display_value, wait_second_operand } = calculator;
    //This checks if the wait_second is true and sets Display_value
    //to the key that was clicked on.
    if (wait_second_operand === true) {
        calculator.Display_value = digit;
        calculator.wait_second_operand = false;
    } else {
        //This overwrites Display_value if the current value is 0
        //otherwise it adds onto it.
        calculator.Display_value = Display_value === '0'? digit : Display_value + digit;
    }
}

//This section handles decimal points.
function Input_Decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't 
    //cause bugs in the operation.
    if (calculator.wait_second_operand === true) return;
    if (!calculator.Display_value.includes(dot)) {
        //This is saying that if the display_value does not contain a decimal point
        //then add a decimal point.
        calculator.Display_value += dot;
    }
}

//This section handles operators
function handle_Operator(Next_Operator) {
    const {First_operand, Display_value, operator} = calculator;
    //When an operator key is pressed, convert the current number
    //displayed on the screen to a number and then store the result in
    //calculator.First_Operand if it doesn't exist.
    const value_of_Input = parseFloat(Display_value);
    //checks if an operator already exists and if wait_second_operand is true,
    //then updates the operator an exits from the function.
    if (operator && calculator.wait_second_operand) {
        calculator.operator = Next_Operator;
        return;
    }
    if (First_operand == null) {
        calculator.First_operand = value_of_Input;
    } else if (operator) {//checks if an operator already exists 
        const value_Now = First_operand || 0;
        //If operator exists, property lookup is performed for the operator
        //in the perform_calculation object and the function that matche the 
        //operator executed.
        let result = perform_calculation[operator](value_Now, value_of_Input);
        //Here add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed (9);
        //This will remove any trailing 0's
        result = (result *1).toString();
        calculator.Display_value = parseFloat(result);
        calculator.First_operand = parseFloat(result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = Next_Operator;
}
const perform_calculation = {
    '/': (First_operand, second_operand) => First_operand / second_operand,
    '*': (First_operand, second_operand) => First_operand * second_operand,
    '+': (First_operand, second_operand) => First_operand + second_operand,
    '-': (First_operand, second_operand) => First_operand - second_operand,
    '=': (First_operand, second_operand) =>  second_operand
};
function calculator_Reset() {
    calculator.Display_value = '0';
    calculator.First_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}
//This function updates the calculator screen with the contents of Display_value
function update_Display() {
    //Make use of the calculator-screen class to target the 
    //input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.Display_value;
}

update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element
    //that was clicked.
    const { target } = event;
    //If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handle_Operator(target.value);
        update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        update_Display();
        return;
    }
    //This is to ensures that AC clears all inputs from the calculator screen.
    if (target.classList.contains('all-clear')) {
        calculator_Reset();
        update_Display();
        return;
    }
    Input_Digit(target.value);
    update_Display();
})