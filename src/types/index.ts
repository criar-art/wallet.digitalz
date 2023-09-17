export type TypeRegister = {
  label: string;
  value: string;
}

export type Register = {
  id: string | undefined;
  type: TypeRegister | undefined;
  date: string | undefined;
  name: string | undefined;
  value: number | undefined;
  description: string | undefined;
  pay: boolean | undefined;
}

export type RegisterIds = {
  id: string;
}

export interface typeValue {
  type: TypeRegister;
}

export interface sortValue {
  value: number;
}
