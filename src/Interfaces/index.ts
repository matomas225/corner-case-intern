export interface ISideCard {
  name: string;
  isChecked: boolean;
  link?: string;
}
export interface ITodoItem {
  number: number;
  name: string;
  sideCards: Array<ISideCard>;
}
