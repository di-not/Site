const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},

	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		const svgrLoader = {
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						icon: true,
						svgoConfig: {
							plugins: [
								{
									name: 'convertColors',
									params: {
										currentColor: true,
									},
								},
							],
						},
					},
				},
			],
		}
		config.module.rules.push(svgrLoader)
		return config
	},
}
export default nextConfig
