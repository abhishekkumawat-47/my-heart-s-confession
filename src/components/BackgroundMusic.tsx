import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to 30% for background music
    audio.volume = 0.3;

    // Auto-play music on any user interaction
    const startMusic = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Remove listeners after first play
            document.removeEventListener('click', startMusic);
            document.removeEventListener('keydown', startMusic);
            document.removeEventListener('scroll', startMusic);
          })
          .catch(() => {
            console.log('Waiting for user interaction to play music');
          });
      }
    };

    // Try immediate autoplay
    startMusic();

    // Add listeners for user interaction
    document.addEventListener('click', startMusic);
    document.addEventListener('keydown', startMusic);
    document.addEventListener('scroll', startMusic);

    return () => {
      document.removeEventListener('click', startMusic);
      document.removeEventListener('keydown', startMusic);
      document.removeEventListener('scroll', startMusic);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/background-music.mp3"
      />
      
      {/* Music Control Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <Button
          onClick={togglePlay}
          size="icon"
          className="h-12 w-12 rounded-full bg-primary/90 hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <div className="flex gap-1 animate-pulse">
              <div className="w-0.5 h-3 bg-white rounded-full"></div>
              <div className="w-0.5 h-3 bg-white rounded-full"></div>
            </div>
          ) : (
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
          )}
        </Button>

        <Button
          onClick={toggleMute}
          size="icon"
          className="h-12 w-12 rounded-full bg-primary/90 hover:bg-primary shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white animate-pulse" />
          )}
        </Button>
      </div>
    </>
  );
};

export default BackgroundMusic;
