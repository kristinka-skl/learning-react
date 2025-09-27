import css from "./Form.module.css";
interface FormProp {
  onSubmit: (value: string) => void;
}
export default function Form({ onSubmit }: FormProp) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    if (username === "") {
      alert("Please enter your name");
      return;
    }
    console.log("Order received from:", username);
    onSubmit(username);
  };
  return (
    <form className={css.container} action={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit" className={css.button}>
        Submit
      </button>
    </form>
  );
}
