export const simple = (values: number[]): number =>
  values.reduce((a: number, b: number) => a + b) / values.length;
