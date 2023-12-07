import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState({ ...initialValues });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (Object.values(values).some((value) => value.trim() === "")) {
      setError("All fields are required!");
      return;
    }

    setError("");
    submitHandler(values);
  };

  return {
    values,
    onChange,
    onSubmit,
    isSubmitted,
    error,
  };
}
