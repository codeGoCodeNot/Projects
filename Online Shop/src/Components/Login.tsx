import { useMutation } from "@tanstack/react-query";
import { useEffect, useId, useState } from "react";
import { post } from "../Fetcher/fetcher";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(2, { message: "Password must be at least 2 characters" }),
});

type FormData = z.infer<typeof schema>;

type LoginProps = {
  onUserLogin: (newUser: { username: string }) => void;
};

const Login = ({ onUserLogin }: LoginProps) => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const mutation = useMutation({
    mutationFn: (data: { u_email: string; u_password: string }) =>
      post("post", "rpc/login", data),
    onSuccess: (res) => {
      console.log("Login success", res);
      if (res && res[0]) {
        onUserLogin(res[0]);
        navigate("/profile");
        setLoginError("");
        reset();
      }
    },
    onError: () => {
      setLoginError("Login failed due to invalid credentials.");
    },
  });

  const onSubmit = (data: FormData) =>
    mutation.mutate({ u_email: data.email, u_password: data.password });

  return (
    <div className="profile-wrapper">
      <h1>Login</h1>
      <title>Login | Blackmarket</title>
      <p className="text-dimmed">Login to BlackMarket</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor={emailId}>
          Email<span className="required">*</span>:
        </label>
        <input
          id={emailId}
          {...register("email")}
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm pb-1">{errors.email.message}</p>
        )}

        <label className="label" htmlFor={passwordId}>
          Password<span className="required">*</span>:
        </label>
        <input
          id={passwordId}
          {...register("password")}
          name="password"
          type="password"
          className="input"
          placeholder="Password"
          autoComplete="current-password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm pb-1">{errors.password.message}</p>
        )}

        <p className="login-error text-sm">{loginError}</p>

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
