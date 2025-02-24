const RepitComponent = () => {
  let students = [];
  console.log(Boolean(0));
  return (
    <>
      <h2 className="text-red-500 font-bold text-center mt-10 text-3xl">
        Hello Mukit
      </h2>
      <div>
        <h2 className="text-center font-bold text-4xl">
          {students.length && "Not Available"}
        </h2>
      </div>
    </>
  );
};

export default RepitComponent;
