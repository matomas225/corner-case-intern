export interface ITodoItem {
  number: number;
  name: string;
  sideCards: Array<{ name: string; isChecked: boolean; link?: string }>;
}
