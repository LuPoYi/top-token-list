import React from "react"

interface Token {
  chainId: number
  address: string
  decimals: number
  symbol: string
  name: string
}

interface TokenTableProps {
  tokenList: Token[]
}

export const TokenTable = ({ tokenList }: TokenTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Symbol & Name</th>

            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tokenList.map(({ symbol, address, decimals, name }) => (
            <tr key={address}>
              <td>
                {symbol}
                <br />
                <span className="badge badge-ghost badge-sm">{name}</span>
              </td>
              <td>{address}</td>
              <th></th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Symbol & Name</th>
            <th>Address</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
