import ChildB from "./ChildB";

const ChildA = ({ data }) => {
  return (
    <div>
      <h1 className="text-center mb-4 text-xl">This is ChildA components</h1>
      <ChildB data={data}></ChildB>
    </div>
  );
};

export default ChildA;
