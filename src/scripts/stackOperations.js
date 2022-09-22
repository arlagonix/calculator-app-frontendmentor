export const operandStack = [];
export const operationStack = [];

// Helps to launch the last operation when user presses "=" multiple times
// without need to input the 2nd operand every time
export let lastOperation = ""; // Operation of the last calculation
export let lastOperand = "0"; // 2nd operand of the last calculation

import {
  displayOperandAndOperation,
  clearScreenOperandOperation,
  displayNumber,
  displayText,
} from "./displayHideInfo.js";

/**
 * Removes the operand from the stack.
 * Returns that operand.
 *
 * @returns {string} Operand from the operand stack
 */
export function getOperand() {
  if (operandStack.length === 0) return "0";
  return operandStack.pop();
}

/**
 * Adds the operand to the global operand stack.
 *
 * @param {string} operand Operand that has to be added to the stack
 * @returns {undefined} undefined
 */
export function setOperand(operand) {
  operandStack.push(operand);
  return;
}

/**
 * Empties global stacks of operands, operations.
 * Empties global last operation, operand.
 * Clears the screen.
 *
 * @returns {undefined} undefined
 */
export function emptyCalculatorStacks() {
  operandStack.length = 0;
  operationStack.length = 0;
  operandStack.push("0");
  lastOperation = "";
  lastOperand = "0";
  clearScreenOperandOperation();
  return;
}

/**
 * Does the math.
 * Changes the global operand and operation stacks, last operand and operation.
 * Displays the result of calculation.
 *
 * @returns {undefined} undefined
 */
export function performCalculation() {
  let operandTwo = operandStack.pop();
  let operandOne = operandStack.pop();
  const operation = operationStack.pop();
  let result;

  // Otherwise result will be NaN in some cases
  operandOne = operandOne === "-" ? "0" : operandOne;
  operandTwo = operandTwo === "-" ? "0" : operandTwo;

  if (operandTwo === undefined) {
    // Can't peform the calculation if the 2nd operand is empty
    // In this case the result of calculation is 0.
    result = "0";
    displayNumber(result);
    operandStack.push(result);
    return;
  }
  if (operation === undefined) {
    // User might press "=" with no operations in stack
    // In this case result is equal to the 1st operand
    // (when operand stack contains only 1 operand, operandTwo is actually the 1st operand)
    result = operandTwo;
    displayNumber(result);
    operandStack.push(result);
    return;
  }
  if (operandOne === undefined && operation !== undefined) {
    // We can't perfrom the calculation if the 1st operand is empty
    // In this case the 1st operand defaults to 0.
    operandOne = "0";
  }

  lastOperand = operandTwo;

  switch (operation) {
    case "+":
      // https://stackoverflow.com/a/28856155/19449790
      // helped me to solve the precision problem
      result = parseFloat((+operandOne + +operandTwo).toFixed(9));

      // Unsure if we can reach infinity with "+"
      if (Math.abs(result) === Infinity) {
        displayText("The result is too big");
        emptyCalculatorStacks();
        return;
      }
      result = result.toString();
      break;
    case "-":
      result = parseFloat((+operandOne - +operandTwo).toFixed(9));

      // Unsure if we can reach infinity with "-"
      if (Math.abs(result) === Infinity) {
        displayText("The result is too big");
        emptyCalculatorStacks();
        return;
      }
      result = result.toString();
      break;
    case "*":
      result = parseFloat((+operandOne * +operandTwo).toFixed(9));
      if (Math.abs(result) === Infinity) {
        displayText("The result is too big");
        emptyCalculatorStacks();
        return;
      }
      result = result.toString();
      break;
    case "/":
      if (+operandTwo === 0) {
        displayText("Can't divide by 0");
        emptyCalculatorStacks();
        return;
      }

      result = parseFloat((+operandOne / +operandTwo).toFixed(9));

      if (Math.abs(result) === Infinity) {
        displayText("The result is too big");
        emptyCalculatorStacks();
        return;
      }
      result = result.toString();
      break;
  }
  displayNumber(result);
  operandStack.push(result);
  return;
}

/**
 * Adds an operation to the operation stack.
 * If there is already an operation in the stack, launches the calculation.
 * Displays the first operand and the operation.
 *
 * @param {string} operation
 */
export function setOperation(operation) {
  const currentOperation = operationStack.pop();
  operationStack.push(operation);
  lastOperation = operation;
  if (currentOperation !== undefined) {
    performCalculation();
    operationStack.push(operation);
  }
  setOperand("0");
  displayOperandAndOperation(operandStack[0], operation);
}
