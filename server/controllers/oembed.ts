import { getService } from '../utils';

/**
 * media-embed.js controller
 *
 * @description: A set of functions called "actions" of the `media-embed` plugin.
 */

export default {
  fetch: async (ctx) => {
    return await getService("oembed").fetch(ctx.request.query.url);
  },
};
