import type {CSSProperties, ReactNode} from "react";
import LiquidGlass from "liquid-glass-react";

interface LiquidCardProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	/** 圆角,默认 16 */
	cornerRadius?: number;
	/** 毛玻璃模糊强度,默认 0.0625(liquid-glass-react 原生单位) */
	blurAmount?: number;
	/** 饱和度 %,默认 140 */
	saturation?: number;
	/** 折射强度,默认 70 */
	displacementScale?: number;
	/** 色差强度,默认 2 */
	aberrationIntensity?: number;
	/** 是否在浅色背景上,默认 false */
	overLight?: boolean;
	/** 内边距,默认 "16px 20px" */
	padding?: string;
	/** 模式,默认 standard */
	mode?: "standard" | "polar" | "prominent" | "shader";
	/** 点击事件 */
	onClick?: () => void;
}

/**
 * LiquidCard - 真正的 liquid-glass-react 效果作为容器。
 * 内部使用 LiquidGlass(库自带 SVG displacement + backdrop-filter 折射 + 模糊),
 * 通过 inline prop 破解库默认的居中浮动定位,让它成为普通 inline-block 卡片。
 *
 * 效果与 https://github.com/rdev/liquid-glass-react 完全一致。
 */
export default function LiquidCard({
	children,
	className = "",
	style,
	cornerRadius = 16,
	blurAmount = 0.0625,
	saturation = 140,
	displacementScale = 70,
	aberrationIntensity = 2,
	overLight = false,
	padding = "16px 20px",
	mode = "standard",
	onClick,
}: LiquidCardProps) {
	return (
		<LiquidGlass
			inline
			mode={mode}
			displacementScale={displacementScale}
			blurAmount={blurAmount}
			saturation={saturation}
			aberrationIntensity={aberrationIntensity}
			cornerRadius={cornerRadius}
			overLight={overLight}
			padding={padding}
			className={className}
			style={style}
			onClick={onClick}
		>
			{children}
		</LiquidGlass>
	);
}
