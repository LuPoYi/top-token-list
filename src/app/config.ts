import {
  avalanche,
  bsc,
  mainnet,
  polygon,
  arbitrum,
  optimism,
} from "@wagmi/core/chains"

import mainnetTokensJSON from "@/data/mainnet.json"
import arbitrumTokensJSON from "@/data/arbitrum.json"
import polygonTokensJSON from "@/data/polygon.json"

type TokenSymbols = keyof typeof mainnetTokensJSON

export const tokenListMap: Record<number, any> = {
  [mainnet.id]: mainnetTokensJSON,
  [polygon.id]: polygonTokensJSON,
  [arbitrum.id]: arbitrumTokensJSON,
}

export const supportedChainInfoMap: Record<number, any> = {
  [mainnet.id]: mainnet,
  [polygon.id]: polygon,
  [arbitrum.id]: arbitrum,
}
