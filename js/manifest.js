(function () {
  // ベースパスを取得（/atsukura-live-archive など）
  var basePath = document.querySelector('base')?.getAttribute('href')?.replace(/\/$/, '') || '';

  if (window.location.href.indexOf(`${basePath}/live?standalone=true`) === -1 &&
      window.location.href.indexOf('/live?standalone=true') === -1) {
    return {};
  }

  var manifest = {
    short_name: 'アツクラLIVE!',
    name: 'アツクラLIVE!',
    description:
      'アツクラLIVE!は、総勢20名のYouTuberが生活するマインクラフト「アツクラ」の非公式のポータルサイトです。各メンバーがYouTubeで行うライブ配信や、動画に手軽にアクセスできます。',
    icons: [
      {
        src: 'logo192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: 'logo512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    start_url: `${window.location.origin}${basePath}/live`,
    display: 'standalone',
    theme_color: '#0f0f0f',
    background_color: '#0f0f0f',
  };
  const stringManifest = JSON.stringify(manifest);
  const blob = new Blob([stringManifest], { type: 'application/json' });
  const manifestURL = URL.createObjectURL(blob);
  document.querySelector('#manifest-placeholder').setAttribute('href', manifestURL);
})();
