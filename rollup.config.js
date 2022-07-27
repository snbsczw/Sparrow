import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js', // 打包入口
  output: [
    {
      file: 'lib/sparrow.js', // 对于node.js，打包成CommonJS
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js', // 对于浏览器，打包成ESmodule
      format: 'es',
    },
    {
      file: 'dist/sparrow.min.js',
      name: 'sp',
      format: 'umd', // 对于Nodejs和浏览器，打包成混合模式
    },
  ],
  plugins: [
    resolve(),
    babel(), // 使用babel插件
  ],
};
