// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    data: 'From Layout'
  }
}