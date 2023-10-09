import { Link } from "react-router-dom";
import regiser from "../assets/register.jpg";

const Register = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${regiser})`,
        }}
      >
        <div className="hero-overlay bg-opacity-90 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
              <div className="text-center">
                <h1 className="text-3xl font-bold">Register now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-transparent">
                <form className="card-body">
                  <div className="form-control mt-6">
                    <input
                      type="text"
                      placeholder="your name"
                      name="name"
                      className="input input-bordered "
                      required
                    />
                  </div>
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
                      className="input input-bordered"
                      required
                    />
                    <label className="label mt-3 text-white ">
                      Already have account?
                      <Link
                        to="/login"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Please login !
                      </Link>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-orange-400 text-white hover:text-gray-600">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
