import { useForm } from "react-hook-form";
import { MdEmail, MdPassword } from "react-icons/md";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        data
      )
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
        alert("Sesión iniciada correctamente");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) {
          alert("Credenciales incorrectas");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div>
          <p className="title-form">
            Welcome! Enter your email and password to continue
          </p>
        </div>
        <div className="test-data">
          <h4>Test data</h4>
          <p className="user-test">
            <MdEmail /> mason@gmail.com
          </p>
          <p className="password-test">
            <MdPassword /> mason1234
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit(submit)}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>

          <button className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
