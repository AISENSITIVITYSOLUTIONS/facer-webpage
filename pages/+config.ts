import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "Neural Network Initiative",
  description: "Landing page de Neural Network Initiative",
  prerender: true,

  extends: [vikeReact],
};

export default config;
