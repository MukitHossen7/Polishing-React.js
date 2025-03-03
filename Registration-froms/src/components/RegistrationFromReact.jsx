import { useState } from "react";

const RegistrationFromReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
  });
  const handleInputField = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Registration From
        </h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label className="block text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleInputField}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInputField}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-600">Email</label>
            <input
              value={user.email}
              onChange={handleInputField}
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputField}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-600">Number</label>
            <input
              type="text"
              name="number"
              value={user.number}
              onChange={handleInputField}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFromReact;
