import { useEffect } from "react";
import { useState } from "react";

const NotFetchData = () => {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!apiData) return <p>Loading...</p>;
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
