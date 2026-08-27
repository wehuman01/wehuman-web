/** All internal hrefs go through here so the GitHub Pages base path
 *  (`/wehuman-web`) is applied once, at the edge. */

export const BASE_URL: string = import.meta.env.BASE_URL ?? '/';

export const url = (p: string): string => BASE_URL.replace(/\/$/, '') + p;
