import { useEffect, useState } from "react";

function useYoutube() {
  const API_KEY = "AIzaSyDI3jbAxalxiCopR2ioG8hrpjLRgE6CGoE";
  const PLAYLIST_ID = "PLdjq6crnM99TKe976L1X65fW4djUEuxCI"; // Example playlist
  // const PLAYLIST_ID = "PLgUwDviBIf0rF1w2Koyh78zafB0cz7tea"; // Example playlist
  const maxRes = 50;
  const [ytvideos, ytsetVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=${maxRes}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const videoItems = data.items.map((item) => ({
          id: item.contentDetails.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        ytsetVideos(videoItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch playlist videos:", err);
        setLoading(false);
      });
  }, []);

  return { ytvideos, loading, playingVideoId, setPlayingVideoId };
}

export default useYoutube;
