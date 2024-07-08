import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { WagmiProvider, http } from 'wagmi'

import {
 bsc, bscTestnet
} from 'wagmi/chains';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 /* New API that includes Wagmi's createConfig and replaces getDefaultWallets and connectorsForWallets */
 const config = getDefaultConfig({
  appName: 'ECash',
  projectId: 'f4de2165b726117225642434251a5470',
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
