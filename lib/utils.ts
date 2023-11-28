export function doSomething(...args: any[]) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong");
    }, 1000);
  });
}
