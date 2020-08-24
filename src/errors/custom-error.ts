export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    //super(message) is only for logging purpose
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  // returns Array of Objects
  abstract serializeErrors(): { message: string; field?: string }[];
}
