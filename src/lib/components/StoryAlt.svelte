<script lang="ts">
	import Plate from './Plate.svelte';
	export let storyImage: string;
	export let storyTitle: string;
	export let storyLink: string;
</script>

<a href={storyLink}>
	<article>
		<div class="image-container">
			<img class="storyimage" src={storyImage} alt={storyTitle} />
		</div>

		<div class="window">
			<svg
				class="window"
				width="228"
				height="342"
				viewBox="0 0 228 342"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask id="path-1-inside-1_35_105" fill="white">
					<rect y="96" width="227" height="246" rx="10" />
				</mask>
				<rect
					y="96"
					width="227"
					height="246"
					rx="10"
					stroke="#A17E53"
					stroke-width="24"
					mask="url(#path-1-inside-1_35_105)"
				/>
				<path
					d="M6.17354 102C9.27925 48.4597 53.6811 6 108 6H119C173.319 6 217.721 48.4597 220.826 102H6.17354Z"
					fill="#6C5334"
					stroke="#A17E53"
					stroke-width="12"
				/>
				<g style="mix-blend-mode:lighten">
					<line
						x1="28.2416"
						y1="99.1192"
						x2="102.162"
						y2="11.0241"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<path d="M214.5 98.0235L140.579 9.92835" stroke="#795D3B" stroke-width="6" />
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="179.622"
						y1="98.0235"
						x2="105.702"
						y2="9.92835"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="145.622"
						y1="101.023"
						x2="71.7019"
						y2="12.9283"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="113.409"
						y1="108.193"
						x2="42.7019"
						y2="23.9284"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="71.697"
						y1="100.552"
						x2="26.7018"
						y2="46.9284"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="30.9855"
						y1="97.9097"
						x2="11.7019"
						y2="74.9284"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="62.2416"
						y1="101.119"
						x2="139.376"
						y2="9.19391"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="97.3485"
						y1="104.204"
						x2="168.055"
						y2="19.9392"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="136.776"
						y1="104.544"
						x2="194.627"
						y2="35.5997"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
				<g style="mix-blend-mode:lighten">
					<line
						x1="176.702"
						y1="97.3739"
						x2="208.841"
						y2="59.0717"
						stroke="#795D3B"
						stroke-width="6"
					/>
				</g>
			</svg>

			<svg
				class="windowLeft"
				width="104"
				height="224"
				viewBox="0 0 102 222"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask id="path-1-inside-1_38_78" fill="white">
					<path d="M0 0H102V222H0V0Z" />
				</mask>
				<path d="M0 0H102V222H0V0Z" fill="#D7C2A7" />
				<path d="M96 0V222H108V0H96Z" fill="#A17E53" mask="url(#path-1-inside-1_38_78)" />
				<rect x="23" y="91" width="56" height="41" rx="5" fill="#6C5334" />
				<rect x="23" y="153" width="56" height="41" rx="5" fill="#6C5334" />
				<rect x="24" y="29" width="56" height="41" rx="5" fill="#6C5334" />
			</svg>

			<svg
				class="windowRight"
				width="104"
				height="224"
				viewBox="0 0 101 222"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask id="path-1-inside-1_38_83" fill="white">
					<path d="M0 0H101V222H0V0Z" />
				</mask>
				<path d="M0 0H101V222H0V0Z" fill="#D7C2A7" />
				<path d="M6 222V0H-6V222H6Z" fill="#A17E53" mask="url(#path-1-inside-1_38_83)" />
				<rect x="23" y="153" width="56" height="41" rx="5" fill="#6C5334" />
				<rect x="23" y="91" width="56" height="41" rx="5" fill="#6C5334" />
				<rect x="23" y="29" width="56" height="41" rx="5" fill="#6C5334" />
			</svg>
		</div>
		<Plate>{storyTitle}</Plate>
	</article>
</a>

<style>
	article {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}
	.image-container {
		position: absolute;
		width: 205px;
		height: 228px;
	}
	.storyimage {
		width: 100%;
		height: 100%;
		cursor: pointer;
		object-fit: cover;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.window {
		position: relative;
		cursor: pointer;
	}
	.window:hover .windowLeft {
		transform: rotateY(-180deg);
	}
	.window:hover .windowRight {
		transform: rotateY(180deg);
	}
	.windowLeft {
		position: absolute;
		left: 0;
		bottom: 0;
		margin-left: 11px;
		margin-bottom: 15px;
		transition: transform 1.5s ease-in-out;
		cursor: pointer;
		transform-style: preserve-3d;
		cursor: pointer;
		transform: perspective(200px);
		transform-origin: left;
	}
	.windowRight {
		position: absolute;
		right: 0;
		bottom: 0;
		margin-right: 12px;
		margin-bottom: 16px;
		transition: transform 1.5s;
		cursor: pointer;
		transform-style: preserve-3d;
		cursor: pointer;
		transform: perspective(200px);
		transform-origin: right;
	}
</style>
