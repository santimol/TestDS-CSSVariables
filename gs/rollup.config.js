import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { cleandir } from "rollup-plugin-cleandir";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// To handle css files
import postcss from "rollup-plugin-postcss";
//minifier
import terser from "@rollup/plugin-terser";
//optimize images
import image from "@rollup/plugin-image";


import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "./index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      cleandir(),
      peerDepsExternal(),
      resolve({ extensions: [".js", ".jsx"] }),
      commonjs(),
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"], babelHelpers: "bundled" }),
      postcss(), //Pone el css en linea
      terser(),
      image()
    ]
  },
]