interface FormValues {
  name: string;
  email: string;
  password: string;
}

const input: Record<keyof FormValues, { initialValue: string; label: string }> =
  {
    name: {
      initialValue: "",
      label: "Name",
    },
    email: {
      initialValue: "",
      label: "Email",
    },

    password: {
      initialValue: "",
      label: "Password",
    },
  };

console.log(input.name, input.email, input.password);
