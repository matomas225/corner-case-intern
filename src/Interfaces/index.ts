export interface ISideCard {
  name: string;
}
export interface ITodoItem {
  id: number;
  name: string;
  sideCards: Array<ISideCard>;
}
