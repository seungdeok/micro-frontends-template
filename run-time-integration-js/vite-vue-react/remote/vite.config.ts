import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { NativeFederationTypeScriptRemote } from "@module-federation/native-federation-typescript/vite";

const moduleFederationConfig = {
  name: "remote-app",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./RemoteApp": "./src/bootstrap",
  },
  shared: [],
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation(moduleFederationConfig),
    NativeFederationTypeScriptRemote({ moduleFederationConfig }),
  ],
  server: {
    proxy: {
      "/@mf-types.zip": {
        target: "http://localhost:5174",
        changeOrigin: true,
        rewrite: () => `/@fs/${process.cwd()}/dist/@mf-types.zip`,
      },
    },
    fs: {
      allow: ["./dist"],
    },
  },
});
