import { useMutation } from "@tanstack/react-query";
import { useId, type FormEvent } from "react";
import { post } from "../Fetcher/fetcher";

const Login = () => {
  const emailId = useId();
  const passwordId = useId();

  const mutation = useMutation({
    mutationFn: (data: { u_email: string; u_password: string }) =>
      post("post", "rpc/login", data),
    onSuccess: (res) => console.log("Login success", res),
    onError: (err) => console.error("Login error", err),
  });

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    console.log(email, password);

    mutation.mutate({ u_email: email, u_password: password });
  }

  return (
    <div className="profile-wrapper">
      <h1>Login</h1>
      <p className="text-dimmed">Login to BlackMarket</p>

      <form onSubmit={handleLogin}>
        <label className="label" htmlFor={emailId}>
          Email<span className="required">*</span>:
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          autoComplete="email"
        />

        <label className="label" htmlFor={passwordId}>
          Password<span className="required">*</span>:
        </label>
        <input
          id={passwordId}
          name="password"
          type="password"
          className="input"
          placeholder="Password"
          autoComplete="current-password"
        />

        <div className="form-buttons">
          <input
            type="submit"
            value="Login"
            className="btn"
            style={{ cursor: mutation.isPending ? "not-allowed" : "pointer" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
