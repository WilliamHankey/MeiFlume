const fs = require('fs');
const t = (fs.readFileSync('.env', 'utf8').match(/^VITE_SANITY_TOKEN=(.+)$/m) || [])[1];
const { createClient } = require('@sanity/client');
const c = createClient({
  projectId: 'ykv73jdw',
  dataset: 'meiflume',
  apiVersion: '2023-05-03',
  useCdn: true,
});
c.fetch('*[_type=="about"]{_id,heroImage}').then((d) => console.log('PUBLISHED', JSON.stringify(d, null, 2)))
  .catch((e) => console.error(e.message));

const w = createClient({
  projectId: 'ykv73jdw',
  dataset: 'meiflume',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: t,
  perspective: 'raw',
});
w.fetch('*[_type=="about"]{_id,heroImage}').then((d) => console.log('RAW', JSON.stringify(d, null, 2)))
  .catch((e) => console.error(e.message));