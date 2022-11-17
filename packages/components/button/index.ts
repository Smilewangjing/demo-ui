import _Button from "./src/Button.vue";
import { withInstall } from "@demo-ui/utils";
const DButton = withInstall(_Button); // 生成带有 install 方法的组件
export {
  //提供按需加载
  DButton,
};
export default DButton; // 导出组件
