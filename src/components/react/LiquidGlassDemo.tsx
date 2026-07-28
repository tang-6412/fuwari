import {useCallback, useState} from "react";
import LiquidGlass from "liquid-glass-react";

type Mode = "standard" | "polar" | "prominent" | "shader";

const MODES: Mode[] = ["standard", "polar", "prominent", "shader"];

export default function LiquidGlassDemo() {
	const [mode, setMode] = useState<Mode>("standard");
	const [displacementScale, setDisplacementScale] = useState(70);
	const [blurAmount, setBlurAmount] = useState(0.0625);
	const [saturation, setSaturation] = useState(140);
	const [aberrationIntensity, setAberrationIntensity] = useState(2);
	const [elasticity, setElasticity] = useState(0.15);
	const [cornerRadius, setCornerRadius] = useState(24);
	const [overLight, setOverLight] = useState(false);
	const [clicks, setClicks] = useState(0);

	const handleButtonClick = useCallback(() => {
		setClicks((c) => c + 1);
	}, []);

	return (
		<div className="liquid-glass-demo">
			{/* Colorful backdrop so the refraction/frost is visible */}
			<div className="lg-backdrop" aria-hidden="true">
				<div className="blob blob-1" />
				<div className="blob blob-2" />
				<div className="blob blob-3" />
				<div className="lg-grid" />
			</div>

			<div className="lg-content">
				<section className="lg-card-section">
					<h2 className="lg-section-title">Card Example</h2>
					<div className="lg-card-stage">
						<LiquidGlass
							mode={mode}
							displacementScale={displacementScale}
							blurAmount={blurAmount}
							saturation={saturation}
							aberrationIntensity={aberrationIntensity}
							elasticity={elasticity}
							cornerRadius={cornerRadius}
							overLight={overLight}
						>
							<div className="lg-card-inner">
								<h3>Liquid Glass</h3>
								<p>
									Move your cursor over this card to see the refraction and chromatic
									aberration. The effect mimics Apple&rsquo;s Liquid Glass material.
								</p>
								<p className="lg-hint">
									Current mode: <strong>{mode}</strong>
								</p>
							</div>
						</LiquidGlass>
					</div>
				</section>

				<section className="lg-button-section">
					<h2 className="lg-section-title">Button Example</h2>
					<LiquidGlass
						mode={mode}
						displacementScale={64}
						blurAmount={0.1}
						saturation={130}
						aberrationIntensity={aberrationIntensity}
						elasticity={0.35}
						cornerRadius={100}
						overLight={overLight}
						padding="8px 16px"
						onClick={handleButtonClick}
					>
						<span className="lg-button-label">Click Me</span>
					</LiquidGlass>
					<span className="lg-click-count">Clicked {clicks} times</span>
				</section>

				<section className="lg-controls-section">
					<h2 className="lg-section-title">Controls</h2>
					<div className="lg-control-row">
						<label htmlFor="lg-mode">mode</label>
						<select
							id="lg-mode"
							value={mode}
							onChange={(e) => setMode(e.target.value as Mode)}
						>
							{MODES.map((m) => (
								<option key={m} value={m}>
									{m}
								</option>
							))}
						</select>
					</div>
					<RangeControl
						label="displacementScale"
						min={0}
						max={200}
						step={1}
						value={displacementScale}
						onChange={setDisplacementScale}
					/>
					<RangeControl
						label="blurAmount"
						min={0}
						max={0.5}
						step={0.001}
						value={blurAmount}
						onChange={setBlurAmount}
					/>
					<RangeControl
						label="saturation"
						min={0}
						max={300}
						step={1}
						value={saturation}
						onChange={setSaturation}
					/>
					<RangeControl
						label="aberrationIntensity"
						min={0}
						max={10}
						step={0.1}
						value={aberrationIntensity}
						onChange={setAberrationIntensity}
					/>
					<RangeControl
						label="elasticity"
						min={0}
						max={1}
						step={0.01}
						value={elasticity}
						onChange={setElasticity}
					/>
					<RangeControl
						label="cornerRadius"
						min={0}
						max={200}
						step={1}
						value={cornerRadius}
						onChange={setCornerRadius}
					/>
					<div className="lg-control-row">
						<label htmlFor="lg-over-light">
							<input
								id="lg-over-light"
								type="checkbox"
								checked={overLight}
								onChange={(e) => setOverLight(e.target.checked)}
							/>
							overLight
						</label>
					</div>
				</section>
			</div>

			<style>{`
				.liquid-glass-demo {
					position: relative;
					width: 100%;
					min-height: 520px;
					overflow: hidden;
					border-radius: var(--radius-large, 1rem);
					isolation: isolate;
				}
				.lg-backdrop {
					position: absolute;
					inset: 0;
					z-index: 0;
					overflow: hidden;
					background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%);
				}
				.lg-backdrop .blob {
					position: absolute;
					border-radius: 50%;
					filter: blur(60px);
					opacity: 0.8;
					mix-blend-mode: screen;
				}
				.blob-1 {
					width: 320px;
					height: 320px;
					top: -60px;
					left: -40px;
					background: radial-gradient(circle, #f472b6 0%, transparent 70%);
				}
				.blob-2 {
					width: 380px;
					height: 380px;
					top: 120px;
					right: -80px;
					background: radial-gradient(circle, #22d3ee 0%, transparent 70%);
				}
				.blob-3 {
					width: 300px;
					height: 300px;
					bottom: -80px;
					left: 40%;
					background: radial-gradient(circle, #fbbf24 0%, transparent 70%);
				}
				.lg-grid {
					position: absolute;
					inset: 0;
					background-image:
						linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
					background-size: 28px 28px;
					mask-image: radial-gradient(circle at center, black 0%, transparent 80%);
				}
				.lg-content {
					position: relative;
					z-index: 1;
					padding: 1.5rem;
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
					color: #f8fafc;
				}
				.lg-section-title {
					font-size: 1.05rem;
					font-weight: 700;
					margin: 0 0 0.75rem;
					color: #f8fafc;
					text-shadow: 0 1px 2px rgba(0,0,0,0.3);
				}
				.lg-card-stage {
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 1rem 0;
				}
				.lg-card-inner {
					padding: 1.5rem 2rem;
					min-width: 280px;
					max-width: 460px;
					color: #0f172a;
				}
				.lg-card-inner h3 {
					margin: 0 0 0.5rem;
					font-size: 1.25rem;
					font-weight: 700;
				}
				.lg-card-inner p {
					margin: 0 0 0.5rem;
					font-size: 0.95rem;
					line-height: 1.5;
				}
				.lg-hint {
					opacity: 0.7;
					font-size: 0.85rem !important;
				}
				.lg-button-section {
					display: flex;
					flex-direction: column;
					gap: 0.75rem;
				}
				.lg-button-label {
					font-weight: 600;
					color: #0f172a;
					font-size: 0.95rem;
				}
				.lg-click-count {
					font-size: 0.85rem;
					opacity: 0.85;
				}
				.lg-controls-section {
					background: rgba(15, 23, 42, 0.45);
					border: 1px solid rgba(255, 255, 255, 0.12);
					border-radius: 0.75rem;
					padding: 1rem 1.25rem;
					backdrop-filter: blur(8px);
				}
				.lg-control-row {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 1rem;
					padding: 0.4rem 0;
					font-size: 0.9rem;
				}
				.lg-control-row label {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					min-width: 160px;
					font-variant: tabular-nums;
					color: #e2e8f0;
				}
				.lg-control-row input[type="range"] {
					flex: 1;
					min-width: 120px;
				}
				.lg-control-row input[type="checkbox"] {
					margin-right: 0.4rem;
				}
				.lg-control-row select {
					background: rgba(255,255,255,0.1);
					color: #f8fafc;
					border: 1px solid rgba(255,255,255,0.2);
					border-radius: 0.375rem;
					padding: 0.25rem 0.5rem;
				}
			`}</style>
		</div>
	);
}

interface RangeControlProps {
	label: string;
	min: number;
	max: number;
	step: number;
	value: number;
	onChange: (v: number) => void;
}

function RangeControl({label, min, max, step, value, onChange}: RangeControlProps) {
	return (
		<div className="lg-control-row">
			<label htmlFor={`lg-${label}`}>
				{label}: <span className="lg-value">{value}</span>
			</label>
			<input
				id={`lg-${label}`}
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={(e) => onChange(Number(e.target.value))}
			/>
		</div>
	);
}
