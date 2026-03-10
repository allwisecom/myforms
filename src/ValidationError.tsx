import { FieldError } from 'react-hook-form';

type ValidationErrorProps = {
  fieldError: FieldError | undefined;
};

export function ValidationError({ fieldError }: ValidationErrorProps) {
  if (!fieldError) {
    return null;
  }

  return (
    <p role="alert" className="text-red-500">
      {fieldError.message}
    </p>
  );
}
