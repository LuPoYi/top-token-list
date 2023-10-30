"use client"

import { useState } from "react"
import { tokenListMap, supportedChainInfoMap } from "./config"
import {
  avalanche,
  bsc,
  mainnet,
  polygon,
  arbitrum,
  optimism,
} from "@wagmi/core/chains"
import { TokenTable } from "@/components/TokenTable"

export default function Home() {
  const [currentTab, setCurrentTab] = useState<number>(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="tabs">
        {Object.values(supportedChainInfoMap).map(({ id, name }) => (
          <a
            key={name}
            className={`tab tab-lifted ${id === currentTab && "tab-active"}`}
            onClick={() => setCurrentTab(id)}
          >
            {name}
          </a>
        ))}
      </div>

      <TokenTable tokenList={Object.values(tokenListMap[currentTab])} />
    </main>
  )
}
