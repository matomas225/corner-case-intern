//Welcome to Index
//Setting ITodoItem interface so i could reuse it for setting todoList types
export interface ITodoItem {
  number: number;
  name: string;
  sideCards: Array<{ name: string; isChecked: boolean }>;
}
