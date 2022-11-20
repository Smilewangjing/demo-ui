//gulpfile.ts
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";
import consola from "consola";

/**
 * gulp是类似一个管道的方式执行，从入口开始到出口，中间一步步执行
 */
import { series, src, dest } from "gulp";
/**
 * 对less文件做处理
 */
const distFolder = path.resolve(__dirname, "dist");
function compile() {
  return src(path.resolve(__dirname, "./src/*.less"))
    .pipe(less()) //转译
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCss({}, (details) => {
        // consola.success(
        //   `${chalk.cyan(details.name)}: ${chalk.yellow(
        //     details.stats.originalSize / 1000
        //   )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        // );
        consola.success(
          `${details.name}:${details.stats.originalSize / 1000}KB -> ${
            details.stats.minifiedSize / 1000
          }KB`
        );
      })
    )
    .pipe(dest(distFolder));
}
/**
 * 把打包好的css输出到根目录的dist
 */
function copyfullstyle() {
  const rootDistPath = path.resolve(__dirname, "../../dist/theme-chalk");
  return src(path.resolve(__dirname, "./dist/**")).pipe(dest(rootDistPath));
}
export default series(compile, copyfullstyle);
