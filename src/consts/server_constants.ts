export const DENO_DEPLOYMENT_ID = Deno.env.get("DENO_DEPLOYMENT_ID") ??
  "unknown/unavailable";

export const IS_SERVER = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;

// Scraper entry URL is dynamic based on an input on the start page
// export const SCRAPER_ENTRY_URL = "https://www.tk-aerztefuehrer.de/TK/Suche_SN/index.js?a=DL&Otn1=3741&Ic1=127&Ftg=Leipzig&Ftg_e=CatId9%3A%3ALeipzig%3A%3A51.3310662%3A%3A12.3693495%3B";

// export const AUTH_COOKIE_NAME = "tk-suche-scraper-auth";
