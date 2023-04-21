export type TypeRegister = {
  label: string;
  value: string;
}

export type Register = {
  id: string | undefined;
  type: TypeRegister | undefined;
  name: string | undefined;
  value: number | undefined;
  description: string | undefined;
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
