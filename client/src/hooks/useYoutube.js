import { useEffect, useState } from "react";

function useYoutube() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID;
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
