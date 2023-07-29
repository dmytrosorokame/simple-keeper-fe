export interface IError {
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
  status: number;
}
