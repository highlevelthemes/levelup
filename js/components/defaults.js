/*!***************************************
 * Level Up Theme for High Level (GHL)
 * https//levelupthemes.com
 * Version: v1.7.32
 ****************************************/

const themeVariablesDefaults = [
  "theme-primary-color",
  "theme-secondary-color",
  "theme-accent-color",
  "theme-attention-color",
  "theme-text-headline-color",
  "theme-text-content-color",
  "theme-text-link-color",
  "theme-text-dark-bg-color",
  "theme-icon-color",
  "theme-button-primary-text-color",
  "theme-button-primary-bg-color",
  "theme-background-1-color",
  "theme-background-2-color",
  "theme-background-dark-color"
];
const globalVariables = [
  "headlinefont",
  "contentfont"
];
function setCSSDefaults() {
  themeVariablesDefaults.forEach((name) => {
    const themeVar = `--${name}`;
    if (getComputedStyle(document.documentElement).getPropertyValue(themeVar).trim().length < 2) {
      const defaultValue = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--default-${name}`);
      document.documentElement.style.setProperty(themeVar, defaultValue);
      console.log(`Level Up Theme: ${themeVar} set to default:`, defaultValue);
    }
  });
  globalVariables.forEach((name) => {
    const varName = `--global-${name}`;
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    if (value.replace(/["']/g, "").length > 0) {
      document.documentElement.style.setProperty(`--${name}`, value);
      console.log(`Level Up Theme: --${name} set to global value:`, value);
    }
  });
}

export { setCSSDefaults };
//# sourceMappingURL=defaults.js.map
