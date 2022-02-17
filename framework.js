export const VanillaFramework = (rootSelector) => {
  let appRoot;

  function start() {
    appRoot = document.querySelector(rootSelector);
    if (!appRoot) {
      return;
    }
    appRoot.innerHTML = `<h1>Framework bootstrapped!</h1>`;
  }

  return {
    start,
  };
};
