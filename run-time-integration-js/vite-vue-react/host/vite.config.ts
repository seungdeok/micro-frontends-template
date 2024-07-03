import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { NativeFederationTypeScriptHost } from "@module-federation/native-federation-typescript/vite";

const moduleFederationConfig = {
  name: "host-app",
  remotes: {
    remote: "http://localhost:5173/dist/assets/remoteEntry.js",
  },
  shared: [],
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    vue(),
    federation(moduleFederationConfig),
    NativeFederationTypeScriptHost({ moduleFederationConfig }),
  ],
});
