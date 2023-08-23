import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'bio.icare.health',
  appName: 'icare-client-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
