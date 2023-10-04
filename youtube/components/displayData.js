import { useEffect, useState } from 'react';

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/getData')
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.Url}</div> /* Modify this to display your data */
      ))}
    </div>
  );
}

export default YourComponent;
