import { useEffect, useState } from 'react';
import { fetchVideos } from './fetchVideos';
import store from '@/firebase /firebaseConfig';
function VideoList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await store.collection('videos').get();
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Firebase Firestore Data</h1>
      <ul>
        {
          data.length
        /* {data.map((item) => (
          <li key={item.id}>{item}</li>
          // Replace 'someField' with the actual field you want to display
        ))} */}
      </ul>
    </div>
  );
}

export default VideoList;
