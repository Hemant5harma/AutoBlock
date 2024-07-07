// config/index.js

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Your WalletConnect Cloud project ID
export const projectId = '127a47add8db4a784ff4f6b561bc66ff';

// Create a metadata object
const metadata = {
  name: 'AutoBlock',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// Create wagmiConfig
const chains = [mainnet, sepolia];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
});
