export interface User {
  id?: number;
  email: string;
  password: string;
  token: string;
  agree?: boolean;
}

export interface Error {
  code: number;
  message: string;
}

export interface GeneralStyle {
  stylesGeneral: any;
  stylesGeneralInner: any;
}
export interface MatchStyle {
  color?: string;
  fontSize?: string;
  fontWeight?: string;

  border?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;

  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
}

export interface ValueInput {
  placeholder: string;
  required: boolean;
  select?: Array<any>;
}
