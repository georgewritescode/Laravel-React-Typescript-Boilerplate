<style>
	.loading-spinner {
		width: 96px;
		height: 96px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transform: -webkit-translate(-50%, -50%);
		transform: -moz-translate(-50%, -50%);
		transform: -ms-translate(-50%, -50%);
	}

	.loading-spinner div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 75px;
		height: 75px;
		margin: 9px;
		border: 9px solid #006fdd;
		border-radius: 50%;
		animation: loading-spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #006fdd transparent transparent transparent;
	}

	.loading-spinner div:nth-child(1) {
		animation-delay: -0.45s;
	}

	.loading-spinner div:nth-child(2) {
		animation-delay: -0.3s;
	}

	.loading-spinner div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes loading-spinner {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>