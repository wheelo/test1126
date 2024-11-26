import setupDevPlatform from '@cloudflare/next-on-pages/next-dev';

const config = {
  experimental: {
    outputStandalone: true,
  }
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default config



