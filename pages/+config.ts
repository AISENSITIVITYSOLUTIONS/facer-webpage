import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "FaceR",
  description: "Landing page de FaceR",
  prerender: true,

  extends: [vikeReact],
};

export default config;
