
import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import {  walletConnect } from 'wagmi/connectors'

// Your WalletConnect Cloud project ID
export const projectId = '127a47add8db4a784ff4f6b561bc66ff';
// // Create a metadata object
// const metadata = {
//   name: 'test',
//   description: 'AppKit Example',
//   url: 'https://web3modal.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }

// // Create wagmiConfig
// const chains = [mainnet, sepolia] 

// export const config = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage
//   }),
// })

export const config = createConfig({
    chains: [mainnet, sepolia],
    projectId,
    connectors: [
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });

