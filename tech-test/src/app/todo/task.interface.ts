  // tslint:disable-next-line:interface-over-type-literal
export type Task = {
  id: number;
  label: string;
  description: string;
  category: string;
  done: false | string;
};
