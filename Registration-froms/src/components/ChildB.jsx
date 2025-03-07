import ChildC from "./ChildC";

const ChildB = ({ data }) => {
  return (
    <div>
      <h1 className="text-center mb-4 text-xl">This is ChildB components</h1>
      <ChildC data={data}></ChildC>
    </div>
  );
};

export default ChildB;
