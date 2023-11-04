"use client"

import React from "react"
import {
  avalanche,
  bsc,
  mainnet,
  polygon,
  arbitrum,
  optimism,
} from "@wagmi/core/chains"

interface Token {
  chainId: number
  image: string
  address: string
  decimals: number
  symbol: string
  name: string
}

interface TokenTableProps {
  tokenList: Token[]
}

const expolorUrlMap: Record<number, string> = {
  [mainnet.id]: mainnet.blockExplorers.default.url,
  [polygon.id]: polygon.blockExplorers.default.url,
  [arbitrum.id]: arbitrum.blockExplorers.default.url,
}
export const TokenTable = ({ tokenList }: TokenTableProps) => {
  const addTokenToMM = async (token: Token) => {
    try {
      const { ethereum } = window as any
      await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: token,
        },
      })
    } catch (ex) {
      console.error(ex)
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Symbol & Name</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tokenList.map((token) => {
            const { chainId, symbol, address, name, image } = token
            return (
              <tr key={address}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img src={image} alt={`${symbol} ${name}`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{symbol}</div>
                      <div className="text-sm opacity-50">{name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href={`${expolorUrlMap[chainId]}/token/${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address}
                  </a>
                </td>
                <th>
                  <button onClick={() => addTokenToMM(token)}>
                    Add {symbol} to MetaMask
                  </button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
