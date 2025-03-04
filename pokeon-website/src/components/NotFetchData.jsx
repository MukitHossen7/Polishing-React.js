import { useEffect } from "react";
import { useState } from "react";

const NotFetchData = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  }, []);
  // if (!apiData) return <p>Loading...</p>;
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-20">
        Fetch Data Not Right Away
      </h2>
      {apiData?.map((data) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default NotFetchData;
