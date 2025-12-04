import { useState } from "react";
import * as yup from "yup";

const formSchema = yup.object({
  name: yup.string().min(2, "Name must be at least 2 characters").required(),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .required(),
  email: yup.string().email("Invalid email format").required(),
});

export default function YupValidationDemo() {
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      name: formData.get("name"),
      age: Number(formData.get("age")),
      email: formData.get("email"),
    };

    try {
      await formSchema.validate(data, { abortEarly: false });
      setErrors([]);
      alert("Validation successful!");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setErrors(err.errors);
      }
    }
  }

  return (
    <div style={{ padding: "24px", maxWidth: "350px" }}>
      <h2>Yup Validation Demo</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input name="name" placeholder="Enter your name" />
        <input name="age" placeholder="Enter your age" />
        <input name="email" placeholder="Enter your email" />

        <button
          type="submit"
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Validate
        </button>
      </form>

      {errors.length > 0 && (
        <ul style={{ marginTop: "16px", color: "red" }}>
          {errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
