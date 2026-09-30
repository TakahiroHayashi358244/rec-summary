// インストール（アプリ化）のための最小限のService Worker。キャッシュはしない（常に最新版を読む）。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
