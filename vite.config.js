import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolveConfig, resolveConfigPath }  from './lib/tailwindConfigUtils'

export default async ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const conf = await import(resolveConfigPath(process.env.VITE_TCV_CONFIG))

  return defineConfig({
    plugins: [vue()],
    define: {
      __TAILWIND_CONFIG__: JSON.stringify(resolveConfig(conf.default)),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
