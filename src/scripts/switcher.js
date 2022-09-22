const switcherElement = document.querySelector("#switcher");
const themes = ["theme-1", "theme-2"];

/**
 * Changes the page theme depending on value of range input.
 * In order to change the theme the code adds or removes specific classes from `body` tag.
 *
 * @return {undefined} `undefined`
 */
export function switcherHandler() {
  document.body.classList.remove(...themes);
  switch (+switcherElement.value) {
    case 1: // default theme
      break;
    case 2:
      document.body.classList.add(themes[0]);
      break;
    case 3:
      document.body.classList.add(themes[1]);
      break;
    default:
      break;
  }
  return;
}
