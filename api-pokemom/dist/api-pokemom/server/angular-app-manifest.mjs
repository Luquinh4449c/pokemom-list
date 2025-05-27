
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Luquinh4449c.github.io/pokemom-list/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pokemom-list"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1240, hash: '9965628d21a330962ddb7d2deeaab83aef55ae44285ec9a71bb9f5b51639c4ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1586, hash: '3c24f9d05c6f91240bd3782eb5d8590e03e7222dcec6af5919b1ccfa12394369', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11175921, hash: 'fcf346400d385075f306db83ae1d6ab9b5bd06ea2a481d1c8293e06e6d32a1c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OVGGZTOV.css': {size: 42, hash: 'bux1nJu3TIo', text: () => import('./assets-chunks/styles-OVGGZTOV_css.mjs').then(m => m.default)}
  },
};
