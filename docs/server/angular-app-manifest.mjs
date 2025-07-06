
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/practice-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/practice-project"
  },
  {
    "renderMode": 2,
    "route": "/practice-project/my-work"
  },
  {
    "renderMode": 2,
    "route": "/practice-project/resume"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 457, hash: '891463190d36e0af43b61f6473736822082007fb283842964fb1d27aaf55d7e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: 'c07473f2f1be0b5250cc84dac53579a8b891963d0f3a91f462367bd8fae7a56d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'my-work/index.html': {size: 16949, hash: '9fd980c00e35312d4602776e3bd49cb9e74bc184ab11667b37b7362c677c2e0e', text: () => import('./assets-chunks/my-work_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21558, hash: '07e387f26a80856a83c1b88a5b8b1de2d832a0a487751c5d94d934b47e9218fb', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7425, hash: '9bab1cfd9ff0fc2b234080f278e4d4ea7498a40fcecccb51a34c1813a0058da3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
