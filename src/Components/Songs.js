const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Có lẽ",
    artist: "MCk // Nger",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20Nger%20%20C%C3%B3%20L%E1%BA%BD%20ft%20L%20A%20K%20E%20Prod%20by%20MINHTHAI.mp3?alt=media&token=2e1e8644-0647-4f12-bb75-defb811b5ace",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Fcole.jpg?alt=media&token=9b5da126-bf40-438b-acbc-2e5c487eeb9a",
  },
  {
    id: 2,
    favourite: false,
    songName: "Dù cho mai về sau",
    artist: "buitruonglinh",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20D%C3%B9%20Cho%20Mai%20V%E1%BB%81%20Sau%20Official%20Music%20Video%20%20buitruonglinh.mp3?alt=media&token=e5f028ae-ce21-440c-8030-1cd072da4d76",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Fduchomaivesau.jpg?alt=media&token=f878a84c-4052-433f-92e5-3c33a37db592",
  },
  {
    id: 3,
    favourite: false,
    songName: "Đường tôi trở em về",
    artist: "buitruonglinh",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20%C4%90%C6%B0%E1%BB%9Dng%20T%C3%B4i%20Ch%E1%BB%9F%20Em%20V%E1%BB%81%20%20buitruonglinh%20%20Lyrics%20Video%20.mp3?alt=media&token=bb2733f9-ca43-40bd-8642-6632aa827452",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Fduongtoitroemve.jpg?alt=media&token=3cfb270d-0a94-43c0-9ec0-b70f481ad0ee",
  },
  {
    id: 4,
    favourite: false,
    songName: "Em không hiểu",
    artist: "Changg",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20Changg%20%20Em%20Kh%C3%B4ng%20Hi%E1%BB%83u%20%20Official%20Video%20ft%20Minh%20Huy.mp3?alt=media&token=e5d17ed0-28b7-4a34-853f-757e926e8a7a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Femkhonghieu.jpg?alt=media&token=c094333a-c566-492e-8be0-5da4efc7173c",
  },
  {
    id: 5,
    favourite: false,
    songName: "Hướng dương",
    artist: "Changg",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20CHANGG%20%20H%C6%AF%E1%BB%9ANG%20D%C6%AF%C6%A0NG%20%20Official%20Lyric%20Video.mp3?alt=media&token=043021d2-0087-4813-8f11-80b39ee01787",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Fhuongduong.jpg?alt=media&token=803b0a5f-0681-4588-9e51-b21e6520bde8",
  },
  {
    id: 6,
    favourite: false,
    songName: "Sài Gòn đâu có lạnh",
    artist: "Changg",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20Changg%20x%20LeWiuy%20%20S%C3%80I%20G%C3%92N%20%C4%90%C3%82U%20C%C3%93%20L%E1%BA%A0NH%20%20Official%20Lyric%20Video.mp3?alt=media&token=36833fce-2be5-467e-83f5-69533a4f523c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Fsaigondaucolanh.jpg?alt=media&token=aebde06a-13f6-4046-ba8a-7a60849c8341",
  },
  {
    id: 7,
    favourite: false,
    songName: "Tay to",
    artist: "MCK ft PhongKin",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20Rapitalove%20EP%20Tay%20To%20%20RPT%20MCK%20x%20RPT%20PhongKhin%20prod%20by%20RPT%20Phongkhin%20Official%20Lyric%20Video.mp3?alt=media&token=1587307c-274e-4c37-8829-6af06764fdb0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Ftayto.jpg?alt=media&token=0d9b64c1-9d6f-462d-82e7-62117dbefc80",
  },
  {
    id: 8,
    favourite: false,
    songName: "Thích quá rùi nà",
    artist: "Trung Trần ft Tlinh",
    song: "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Audio-Spotify%2Fy2mate.com%20-%20Th%C3%ADch%20Qu%C3%A1%20R%C3%B9i%20N%C3%A0%20%20tlinh%20feat%20Trung%20Tr%E1%BA%A7n%20prod%20by%20Pacman%20Official%20Lyrics%20Video.mp3?alt=media&token=068719c5-66ed-4773-8bfb-09a7f7f64f9c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/clone-music-web.appspot.com/o/Img-Spotify%2Fthichquaruina.jpg?alt=media&token=769fdb7f-3002-409c-bbe9-4d533f7f9795",
  },
];

export { Songs };
