import { Login } from "../services/user";

const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log("form content: ", event);
    console.log("email: ", event.target.email.value);
    console.log("password: ", event.target.password.value);

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = await Login({ username: email, password });

    return data;
  };

export {handleSubmit}