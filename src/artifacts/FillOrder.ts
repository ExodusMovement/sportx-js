export default JSON.parse(`
{
  "contractName": "FillOrder",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract ISuperAdminRole",
          "name": "_superAdminRole",
          "type": "address"
        },
        {
          "internalType": "contract IEIP712FillHasher",
          "name": "_eip712FillHasher",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "maker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "marketHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "taker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newFilledAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "orderHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "fillHash",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "marketHash",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "baseToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "totalBetSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "percentageOdds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "salt",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "maker",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "executor",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isMakerBettingOutcomeOne",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct LibOrder.Order",
          "name": "order",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "takerAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "takerEscrow",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "potSize",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "internalType": "struct LibOrderAmounts.OrderAmounts",
          "name": "orderAmounts",
          "type": "tuple"
        }
      ],
      "name": "OrderFill",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ZERO_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract IFills",
          "name": "_fills",
          "type": "address"
        },
        {
          "internalType": "contract IEscrow",
          "name": "_escrow",
          "type": "address"
        },
        {
          "internalType": "contract ITokenTransferProxy",
          "name": "_tokenTransferProxy",
          "type": "address"
        },
        {
          "internalType": "contract IOutcomeReporter",
          "name": "_outcomeReporter",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "initialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "action",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "market",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "betting",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stake",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "odds",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "returning",
              "type": "string"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes32",
                      "name": "marketHash",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "address",
                      "name": "baseToken",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "totalBetSize",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "percentageOdds",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "expiry",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "salt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "maker",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "executor",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "isMakerBettingOutcomeOne",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct LibOrder.Order[]",
                  "name": "orders",
                  "type": "tuple[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "makerSigs",
                  "type": "bytes[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "takerAmounts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint256",
                  "name": "fillSalt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibOrder.FillObject",
              "name": "fills",
              "type": "tuple"
            }
          ],
          "internalType": "struct LibOrder.FillDetails",
          "name": "fillDetails",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "executorSig",
          "type": "bytes"
        }
      ],
      "name": "fillOrders",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "action",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "market",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "betting",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "stake",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "odds",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "returning",
              "type": "string"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "bytes32",
                      "name": "marketHash",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "address",
                      "name": "baseToken",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "totalBetSize",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "percentageOdds",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "expiry",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "salt",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "maker",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "executor",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "isMakerBettingOutcomeOne",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct LibOrder.Order[]",
                  "name": "orders",
                  "type": "tuple[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "makerSigs",
                  "type": "bytes[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "takerAmounts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint256",
                  "name": "fillSalt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct LibOrder.FillObject",
              "name": "fills",
              "type": "tuple"
            }
          ],
          "internalType": "struct LibOrder.FillDetails",
          "name": "fillDetails",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "taker",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "takerSig",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "executorSig",
          "type": "bytes"
        }
      ],
      "name": "metaFillOrders",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}
`)
