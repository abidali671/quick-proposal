const ErrorHandler = (error: any) => {
  let new_error: any = {};
  if (error.code === 11000) {
    // for mongoose already registered error
    const error_key: any = [Object.keys(error.keyValue)[0]];
    new_error = {
      [error_key]: `This ${error_key} is already registered`,
    };
  } else if (error.name === "ValidationError") {
    if (error.inner) {
      // for yup schema errors
      error.inner.forEach(
        (error: any) =>
          (new_error[error.path || "non_field_error"] = error.message)
      );
    } else {
      // for mongoose model schema errors
      Object.keys(error.errors).map((key) => {
        new_error[key] = error.errors[key].message;
      });
    }
  } else return error;

  return new_error;
};

export default ErrorHandler;
