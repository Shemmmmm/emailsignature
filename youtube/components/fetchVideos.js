export const fetchVideos = async () => {
    try {
      const querySnapshot = await firestore.collection('videos').get();
      const videos = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        videos.push(data.url);
      });
      return videos;
    } catch (error) {
      console.error('Error fetching videos: ', error);
      return [];
    }
  };
  