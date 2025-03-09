import React, { useReducer } from "react";

const Login = () => {
  let initialState = {
    email: "",
    password: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = state.email;
    const password = state.password;
    console.log(email, password);
  };
  return (
    <div className="flex items-center justify-center mt-15">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              value={state.email}
              onChange={(e) =>
                dispatch({ payload: e.target.value, type: "EMAIL" })
              }
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              value={state.password}
              onChange={(e) =>
                dispatch({ payload: e.target.value, type: "PASSWORD" })
              }
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
