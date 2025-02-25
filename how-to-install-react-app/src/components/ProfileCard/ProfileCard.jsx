/* eslint-disable react/prop-types */
const ProfileCard = ({ name, age, greeting, children }) => {
  return (
    <div className="text-center border-2 border-gray-700 p-5 m-5 rounded-2xl">
      <h1>Hello, {name}!</h1>
      <h2>You are {age} years old.</h2>
      {greeting}
      <div>{children}</div>
    </div>
  );
};

export default ProfileCard;
