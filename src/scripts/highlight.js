// Without a stack I can't know for which element I must remove highlight
const highlightedElement = [];

/**
 * Highlights the element, removes highlight from previously higlighted element (if any)
 * Selector for the highlighted element is stored in a const external array
 * Highlight means to add a class with styles to that element
 *
 * @param {string} elementSelector - CSS selector of the element to be highlighted
 * @return {undefined} undefined
 */
export function hightlightElement(elementSelector) {
  if (highlightedElement.length > 0) {
    document
      .querySelector(highlightedElement.pop())
      .classList.remove("highlight");
  }
  highlightedElement.push(elementSelector);
  document.querySelector(elementSelector).classList.add("highlight");
  return;
}

/**
 * Removes highlight from the element with selector saved in a const external array
 *
 * @return {undefined} undefined
 */
export function removeHighlightFromElement() {
  if (highlightedElement.length === 0) return;
  document
    .querySelector(highlightedElement.pop())
    .classList.remove("highlight");
  return;
}
