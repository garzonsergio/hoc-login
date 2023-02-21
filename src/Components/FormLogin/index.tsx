import React from "react";

interface LoginData {
  username: string;
  password: string;
}

function FormLogin() {
  const [formFields, setFormFields] = React.useState<LoginData>({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("username: ", formFields.username);
    console.log("password: ", formFields.password);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          value={formFields.username}
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={formFields.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export { FormLogin };
