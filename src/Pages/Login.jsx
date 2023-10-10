import { Link, useLocation } from "react-router-dom";
import connection from "../assets/connection.jpg";
import useAuthInfoHooks from "../Hooks/useAuthInfoHooks";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
  const { logInbyEmail, signInByGoogle } = useAuthInfoHooks();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);

    logInbyEmail(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };

  const prePath = useLocation();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${connection})`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col p-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Please Login Here!</h1>
            </div>
            <div className="card flex-shrink-0 shadow-2xl bg-transparent">
              <form onSubmit={handleLogIn} className="card-body text-black">
                <div className="form-control mt-6">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered my-3"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered "
                    required
                  />
                  <label className="label mt-3 text-white ">
                    Do not have any account?
                    <Link
                      to="/register"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Create Account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-orange-400 text-white hover:text-gray-600">
                    Login
                  </button>
                </div>
              </form>
              <div>
                <p>Or</p>
                <div className="flex justify-center gap-2 items-center mb-10">
                  <span>Sign in with</span>
                  <button onClick={signInByGoogle}>
                    <AiFillGoogleCircle className="text-2xl text-orange-400 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
