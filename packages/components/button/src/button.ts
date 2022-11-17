import { ExtractPropTypes } from "vue";
// 定义props类型声明
export const buttonProps = {
  name: {
    type: String,
  },
  size: {
    type: [Number, String],
  },
} as const;
//as const，会让对象的每个属性变成只读（readonly）
export type IconProps = ExtractPropTypes<typeof buttonProps>;
