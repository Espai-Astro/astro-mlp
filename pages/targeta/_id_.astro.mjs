export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/_id__1e98cbcd.mjs').then(n => n._);

export { page };
