const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		domains: ['loremflickr.com', 'i.pinimg.com', 'thumbor.kiiiosk.store'],
	},
	reactStrictMode: true,
	// typescript: {
	// 	ignoreBuildErrors: true,
	// },
}
export default nextConfig
