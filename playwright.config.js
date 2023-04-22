export const testDir = 'tests'
export const timeout = 30000
export const retries = 0
export const reporter = [[`list`]]
export const projects = [
	{
		name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: false,
			viewport: { width: 1720, height: 850 },
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	}
]
