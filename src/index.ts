export const helloWorld = (name: string) => {
  return "Hello world "+ name;
};

export const helloWorldAll = (names: string[]) => {
  return "Hello world "+ names.join(", ");
}