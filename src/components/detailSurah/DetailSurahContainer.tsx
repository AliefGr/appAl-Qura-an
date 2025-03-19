import { useEffect, useRef, useState } from "react";
import { Surah } from "../../types/surah";
import { useParams } from "react-router-dom";
import DetailSurah from "./DetailSurah";

const DetailSurahContainer = () => {
  const { surahId } = useParams<{ surahId: string }>();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentReciter, setCurrentReciter] = useState("01");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://equran.id/api/v2/surat/${surahId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch surahs");
        }
        const datas = await response.json();
        setSurah(datas.data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Error fetching surahs"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [surahId]);
  console.log("Fetching Surah ID:", surahId);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const handlePlayFullSurah = () => {
    if (!surah) return;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(surah.audioFull[currentReciter]);
    audioRef.current.onended = () => {
      setAudioPlaying(false);
    };
    audioRef.current.play();
    setAudioPlaying(true);
  };

  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setAudioPlaying(false);
  };

  const changeReciter = (reciterId: string) => {
    setCurrentReciter(reciterId);
    if (audioPlaying) {
      handlePauseAudio();
      setTimeout(() => {
        handlePlayFullSurah();
      }, 100);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !surah) {
    return <div>
      Error : {error || "Surah not found"}
    </div>;
  }
  // if (!surah) {
  //   return <div>Surah not found</div>;
  // }

  return (
    <DetailSurah
      surah={surah}
      currentReciter={currentReciter}
      changeReciter={changeReciter}
      onPlay={handlePlayFullSurah}
      onPause={handlePauseAudio}
      audioPlaying={audioPlaying}
    />
  );
};

export default DetailSurahContainer;
