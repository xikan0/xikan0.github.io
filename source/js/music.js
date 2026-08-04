// 全局吸底音乐播放器 — 本地 MP3 歌单
// 等待 APlayer 库加载完成后再初始化（aplayerInject 在页面底部异步加载）
function initMusicPlayer() {
  if (typeof APlayer === 'undefined') {
    setTimeout(initMusicPlayer, 100);
    return;
  }
  if (document.querySelector('.aplayer-fixed')) return;

  var container = document.createElement('div');
  document.body.appendChild(container);

  new APlayer({
    container: container,
    fixed: true,
    lrcType: 3,
    audio: [
      { name: 'Dehors',         artist: 'Jordann',              url: '/music/Jordann - Dehors.mp3',             cover: '/music/cover/Jordann - Dehors.jpg',             lrc: '/music/Jordann - Dehors.lrc' },
      { name: 'Turn The Page',  artist: 'Sam Lin',              url: '/music/Sam Lin - Turn The Page.mp3',      cover: '/music/cover/Sam Lin - Turn The Page.jpg',      lrc: '/music/Sam Lin - Turn The Page.lrc' },
      { name: 'Fractures',      artist: 'ILLENIUM、Nevve',      url: '/music/ILLENIUM、Nevve - Fractures.mp3',   cover: '/music/cover/ILLENIUM、Nevve - Fractures.jpg',   lrc: '/music/ILLENIUM、Nevve - Fractures.lrc' },
      { name: 'Call on me',     artist: 'Vianney、Ed Sheeran',  url: '/music/Vianney、Ed Sheeran - Call on me.mp3', cover: '/music/cover/Vianney、Ed Sheeran - Call on me.jpg', lrc: '/music/Vianney、Ed Sheeran - Call on me.lrc' },
      { name: 'Picture of You', artist: 'Sara Kays',            url: '/music/Sara Kays - Picture of You.mp3',   cover: '/music/cover/Sara Kays - Picture of You.jpg',   lrc: '/music/Sara Kays - Picture of You.lrc' },
      { name: '踊り子',          artist: 'Vaundy',               url: '/music/Vaundy - 踊り子.mp3',               cover: '/music/cover/Vaundy - 踊り子.jpg',               lrc: '/music/Vaundy - 踊り子.lrc' },
      { name: 'ちいさな日々',    artist: 'flumpool',             url: '/music/flumpool - ちいさな日々.mp3',       cover: '/music/cover/flumpool - ちいさな日々.jpg',       lrc: '/music/flumpool - ちいさな日々.lrc' },
      { name: '風に吹かれて',    artist: '福原遥',               url: '/music/福原遥 - 風に吹かれて.mp3',         cover: '/music/cover/福原遥 - 風に吹かれて.jpg',         lrc: '/music/福原遥 - 風に吹かれて.lrc' },
      { name: '心墙',            artist: '郭静',                 url: '/music/郭静 - 心墙.mp3',                   cover: '/music/cover/郭静 - 心墙.jpg',                   lrc: '/music/郭静 - 心墙.lrc' },
    ]
  });
}

initMusicPlayer();
