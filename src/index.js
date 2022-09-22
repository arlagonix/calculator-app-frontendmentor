import {
  operandStack,
  operationStack,
  lastOperation,
  lastOperand,
  getOperand,
  setOperand,
  emptyCalculatorStacks,
  performCalculation,
  setOperation,
} from "./scripts/stackOperations.js";

import {
  displayOperandAndOperation,
  clearScreenOperandOperation,
  displayNumber,
} from "./scripts/displayHideInfo.js";

import {
  hightlightElement,
  removeHighlightFromElement,
} from "./scripts/highlight.js";

import { switcherHandler } from "./scripts/switcher.js";
import { pressButtonHandler } from "./scripts/pressButtons.js";
import { numberWithDelimeters } from "./scripts/utils.js";

/* 
  CALCULATOR LOGIC
*/

export const CALCULATOR_SCREEN = document.querySelector("#screen");

document.querySelector("#switcher").addEventListener("change", switcherHandler);
document.addEventListener("keydown", pressButtonHandler);

// 1-ST ROW

document.querySelector("#num-7").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "7" : currentOperand + "7";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-8").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "8" : currentOperand + "8";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-9").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "9" : currentOperand + "9";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#del").addEventListener("click", () => {
  const currentOperand = getOperand();
  let updatedOperand;

  if (
    currentOperand === "0" ||
    currentOperand.length === 1 ||
    currentOperand === ""
  ) {
    updatedOperand = "0";
  } else if (currentOperand.indexOf("e") === -1) {
    // Delete may easily break the exponential view of numbers
    // This will lead no NaN values and I don't want that
    updatedOperand = currentOperand.slice(0, currentOperand.length - 1);
  } else updatedOperand = currentOperand;

  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

// 2-ND ROW

document.querySelector("#num-4").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "4" : currentOperand + "4";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-5").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "5" : currentOperand + "5";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-6").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "6" : currentOperand + "6";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#plus").addEventListener("click", () => {
  hightlightElement("#plus");
  setOperation("+");
});

// 3-RD ROW

document.querySelector("#num-1").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "1" : currentOperand + "1";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-2").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "2" : currentOperand + "2";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-3").addEventListener("click", () => {
  const currentOperand = getOperand();
  const updatedOperand = currentOperand === "0" ? "3" : currentOperand + "3";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#minus").addEventListener("click", () => {
  hightlightElement("#minus");
  const currentOperand = getOperand();
  if (currentOperand === "0") {
    displayNumber("-");
    setOperand("-");
  } else {
    setOperand(currentOperand);
    setOperation("-");
  }
});

// 4-TH ROW

document.querySelector("#dot").addEventListener("click", () => {
  const currentOperand = getOperand();
  let updatedOperand = currentOperand;

  // If we add . to a number in exponential form it will lead to NaN
  if (!currentOperand.includes(".") && currentOperand.indexOf("e") === -1)
    updatedOperand = currentOperand + ".";

  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#num-0").addEventListener("click", () => {
  const currentOperand = getOperand();
  let updatedOperand = currentOperand;
  if (currentOperand !== "0") updatedOperand = currentOperand + "0";
  displayNumber(updatedOperand);
  setOperand(updatedOperand);
});

document.querySelector("#divide").addEventListener("click", () => {
  hightlightElement("#divide");
  setOperation("/");
});

document.querySelector("#times").addEventListener("click", () => {
  hightlightElement("#times");
  setOperation("*");
  document.querySelector("#times");
});

// 5-TH ROW

document.querySelector("#reset").addEventListener("click", () => {
  removeHighlightFromElement();
  emptyCalculatorStacks();
  displayNumber("0");
});

document.querySelector("#equals").addEventListener("click", () => {
  // Used to repeat the last operation with the last operand
  if (operandStack.length < 2 && lastOperation !== "") {
    operandStack.push(lastOperand);
    operationStack.push(lastOperation);
    displayOperandAndOperation(
      numberWithDelimeters(operandStack[0]) +
        " " +
        lastOperation +
        " " +
        numberWithDelimeters(lastOperand),
      "=",
      false
    );
    performCalculation();
  } else {
    performCalculation();
    removeHighlightFromElement();
    clearScreenOperandOperation();
  }
});
