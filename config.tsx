import { http, createConfig } from '@wagmi/core'
import { bsc } from '@wagmi/core/chains'
import { injected } from '@wagmi/connectors'

export const config = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
  ssr: true, 
})