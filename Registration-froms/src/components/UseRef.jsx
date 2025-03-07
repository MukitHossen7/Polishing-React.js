import { useId, useRef } from "react";

const UseRef = () => {
  const id = useId();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor={`${id} userName`}
            className="block text-gray-700 font-medium"
          >
            Name
          </label>
          <input
            id={`${id} userName`}
            ref={nameRef}
            type="text"
            name="name"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor={`${id} userEmail`}
            className="block text-gray-700 font-medium"
          >
            Email
          </label>
          <input
            id={`${id} userEmail`}
            ref={emailRef}
            type="email"
            name="email"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor={`${id} userPass`}
            className="block text-gray-700 font-medium"
          >
            Password
          </label>
          <input
            id={`${id} userPass`}
            ref={passwordRef}
            type="password"
            name="password"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;
