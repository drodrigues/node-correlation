export const simple = (entries: number[]): number =>
  entries.reduce((a: number, b: number) => a + b) / entries.length;
