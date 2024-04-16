export interface CustomStore {
  main: {
    mode: boolean;
  };
}
export interface CustomError {
  response: {
    status: number;
    data: { success: boolean; errors: { message: string; field: string }[] };
  };
}

export interface CustomRef {
  current: { offsetTop: number; offsetHeight: number };
}
