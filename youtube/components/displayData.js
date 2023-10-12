import { useEffect, useState } from 'react';

function Videos() {
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
        <video key={item.id} src={item.Url}></video> /* Modify this to display your data */
      ))}
    </div>
  );
}

export default Videos;
