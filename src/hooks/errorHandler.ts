import { UnexpectedError } from '../errors';

type Callback = (error: Error) => void;
type Result = Callback;

export const useErrorHandler = (callback?: Callback): Result => {
  return (error: Error): void => {
    if (error instanceof UnexpectedError) {
      alert(error.message);
    } else if (callback) {
      callback(error);
    }
  };
};
