
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/my-work"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: 'cb3d68e1d49dd79ae9059ecb55447c57305509fdd3a11b64f335f567768a6115', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '7b1f3375afd24c21c9d07c68d3eb53c3156c64d71d7a1d1e13c69046c8262d06', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'my-work/index.html': {size: 16881, hash: '65629963516d1b511736015ef9ee0500fac91b370cd1bef9007cae2663e25957', text: () => import('./assets-chunks/my-work_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 21490, hash: '5ec11d67b6efc0a7ad7391c5c4ffa710c748e01a4bacb8da74cdfb23b53d3375', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7323, hash: '491c04aeb97bc85e86afe535560833bc50cc050c601eb2c1424ad6f257e59529', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
