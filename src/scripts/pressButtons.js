/**
 * Simulates a `click` on an element with the specified selector.
 * The "clicked" element also gets focus
 *
 * @param {string} elementSelector - CSS selector of an element to click on
 * @return {undefined} undefined
 */
function launchEventFromKeyboard(elementSelector) {
  const element = document.querySelector(elementSelector);
  element.focus();
  element.dispatchEvent(new Event("click"));
  return;
}

/**
 * Turns pressing on specific keyboard keys into pressing on specific buttons.
 * Helps to interact with the calculator with keyboard.
 *
 * @param {Event} e - Event, provides info about the key pressed
 * @return {undefined} undefined
 */
export function pressButtonHandler(e) {
  e.preventDefault(); // Otherwise pressing 'Enter' launches 2 events in a row
  switch (e.key) {
    // 1-ST ROW
    case "7":
      launchEventFromKeyboard("#num-7");
      break;
    case "8":
      launchEventFromKeyboard("#num-8");
      break;
    case "9":
      launchEventFromKeyboard("#num-9");
      break;
    case "Backspace":
      launchEventFromKeyboard("#del");
      break;

    // 2-ND ROW
    case "4":
      launchEventFromKeyboard("#num-4");
      break;
    case "5":
      launchEventFromKeyboard("#num-5");
      break;
    case "6":
      launchEventFromKeyboard("#num-6");
      break;
    case "+":
      launchEventFromKeyboard("#plus");
      break;

    // 3-RD ROW
    case "1":
      launchEventFromKeyboard("#num-1");
      break;
    case "2":
      launchEventFromKeyboard("#num-2");
      break;
    case "3":
      launchEventFromKeyboard("#num-3");
      break;
    case "-":
      launchEventFromKeyboard("#minus");
      break;

    // 4-TH ROW
    case ",":
    case ".":
      launchEventFromKeyboard("#dot");
      break;
    case "0":
      launchEventFromKeyboard("#num-0");
      break;
    case "/":
      launchEventFromKeyboard("#divide");
      break;
    case "x":
    case "*":
      launchEventFromKeyboard("#times");
      break;

    // 5-TH ROW
    case "Delete":
      launchEventFromKeyboard("#reset");
      break;
    case "=":
      // case "Enter":
      launchEventFromKeyboard("#equals");
      break;
    case "Enter":
      launchEventFromKeyboard("#equals");
      break;
  }
  return;
}
