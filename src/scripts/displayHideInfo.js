import { CALCULATOR_SCREEN } from "../index.js";
import { numberWithDelimeters } from "./utils.js";

export const FIRST_OPERAND_VIEW = document.querySelector("#first-operand");
export const OPERATION_VIEW = document.querySelector("#operation");

/**
 * Displays the 1st operand and operation so when user inputs
 * the 2nd operator he doesn't have to keep in mind that information.
 * If user launches the last operation (with multiple "=") displays
 * 1st operand, operation, 2nd operand and "=".
 * Also moves the main value vertically to the bottom of the screen
 *
 * @param {string} operand 1st operand or any other string (like 1st operand, operation, 2nd operand)
 * @param {string} operation Operation
 * @param {boolean} [isOperandNumber=true] Defines if the `operand` must be or not be formatted on the screen as a number
 *
 * @return {undefined} undefined
 */
export function displayOperandAndOperation(
  operand,
  operation,
  isOperandNumber = true
) {
  FIRST_OPERAND_VIEW.style.opacity = 1;
  OPERATION_VIEW.style.opacity = 1;

  if (isOperandNumber) {
    FIRST_OPERAND_VIEW.innerHTML = numberWithDelimeters(
      operand === undefined ? "0" : operand
    );
  } else {
    FIRST_OPERAND_VIEW.innerHTML = operand === undefined ? "0" : operand;
  }

  OPERATION_VIEW.innerHTML = operation === undefined ? "" : operation;

  CALCULATOR_SCREEN.classList.add("text-move-down");
  return;
}

/**
 * Hides the 1st operand and operation.
 * Moves the main value vertically to the center of the screen.
 *
 * @return {undefined} undefined
 */
export function clearScreenOperandOperation() {
  FIRST_OPERAND_VIEW.style.opacity = 0;
  OPERATION_VIEW.style.opacity = 0;

  CALCULATOR_SCREEN.classList.remove("text-move-down");
  return;
}

/**
 * Displays the formatted number on the screen.
 * Made to display the results of calculation
 *
 * @param {string|number} number Number to display on the screen
 * @returns {undefined} undefined
 */
export function displayNumber(number) {
  CALCULATOR_SCREEN.value = numberWithDelimeters(number);
  return;
}

/**
 * Displays the text on the screen.
 * Made to display error messages.
 *
 * @param {string} text Text to display on the screen
 * @returns
 */
export function displayText(text) {
  CALCULATOR_SCREEN.value = text;
  return;
}
