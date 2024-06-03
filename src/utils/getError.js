import errorMessage from "../constants/errorsMessages.json";

export const getError = (error) => {
  const errorCode = error?.errorCode;

  return errorMessage[errorCode] || errorMessage.default_error;
};
