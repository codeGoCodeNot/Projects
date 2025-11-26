import React, { useId, useState } from "react";

const Form = () => {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="profile-wrapper">
      <h1>Login</h1>
      <p className="text-dimmed">Login to SuperM</p>

      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor={emailId}>
          Email<span className="required">*</span>:
        </label>
        <input
          type="email"
          placeholder="Email"
          className="input"
          autoComplete="email"
          name="email"
          id={emailId}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label className="label" htmlFor={passwordId}>
          Password<span className="required">*</span>:
        </label>
        <input
          type="password"
          placeholder="Password"
          className="input"
          autoComplete="current-password"
          name="password"
          id={passwordId}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="form-buttons">
          <input type="submit" value="Login" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default Form;
