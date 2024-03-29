import React, { useState } from "react";
import { FaRegClock, FaHeadphones, FaHeart, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs";
import { useEffect } from "react";
import { MusicPlayer } from "./MusicPlayer";

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].imgSrc);
  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImg(imgSrc);
  };
  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{Songs.length} songs</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="order">#{index + 1}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song.imgSrc} alt="" />
                </div>

                <div className="section">
                  <p className="songName">
                    {song.songName}
                    <span className="spanArtist"> {song.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      456,057
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      --:--
                    </p>

                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} play={true} />
    </div>
  );
}

export { AudioList };
