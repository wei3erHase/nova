/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  L1NovaExecutionManager,
  L1NovaExecutionManagerInterface,
} from "../L1NovaExecutionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_L2_NOVA_REGISTRY_ADDRESS",
        type: "address",
      },
      {
        internalType: "contract iOVM_CrossDomainMessenger",
        name: "_CROSS_DOMAIN_MESSENGER",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_EXEC_COMPLETED_MESSAGE_GAS_LIMIT",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract Authority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newCalldataByteGasEstimate",
        type: "uint256",
      },
    ],
    name: "CalldataByeGasEstimateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "execHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "reverted",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    name: "Exec",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMissingGasEstimate",
        type: "uint256",
      },
    ],
    name: "MissingGasEstimateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum L1_NovaExecutionManager.StrategyRiskLevel",
        name: "strategyRiskLevel",
        type: "uint8",
      },
    ],
    name: "StrategyRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "CROSS_DOMAIN_MESSENGER",
    outputs: [
      {
        internalType: "contract iOVM_CrossDomainMessenger",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_EXECHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXEC_COMPLETED_MESSAGE_GAS_LIMIT",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HARD_REVERT_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HARD_REVERT_TEXT",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "L2_NOVA_REGISTRY_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract Authority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "calldataByteGasEstimate",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentExecHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRelayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentlyExecutingStrategy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "l1Calldata",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "l2Recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getStrategyRiskLevel",
    outputs: [
      {
        internalType: "enum L1_NovaExecutionManager.StrategyRiskLevel",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hardRevert",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "missingGasEstimate",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum L1_NovaExecutionManager.StrategyRiskLevel",
        name: "strategyRiskLevel",
        type: "uint8",
      },
    ],
    name: "registerSelfAsStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Authority",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "newCalldataByteGasEstimate",
        type: "uint128",
      },
    ],
    name: "setCalldataByteGasEstimate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "newMissingGasEstimate",
        type: "uint128",
      },
    ],
    name: "setMissingGasEstimate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFromRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405260028054610c3560861b6001600160801b0319909116600d176001600160801b03161790557ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6006553480156200005a57600080fd5b506040516200208c3803806200208c8339810160408190526200007d91620000f2565b600180546001600160a01b031916339081179091556040518391907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a2606090811b6001600160601b031990811660805293901b90921660a0525060e01b6001600160e01b03191660c05262000165565b60008060006060848603121562000107578283fd5b835162000114816200014c565b602085015190935062000127816200014c565b604085015190925063ffffffff8116811462000141578182fd5b809150509250925092565b6001600160a01b03811681146200016257600080fd5b50565b60805160601c60a05160601c60c05160e01c611ee2620001aa60003980610dbd528061164a5250806103025280610cdb5250806105f45280610c9d5250611ee26000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806341cd0420116100d85780638da5cb5b1161008c578063b7daba3611610066578063b7daba36146102d0578063bf7e214f146102d8578063eb714e19146102e057610182565b80638da5cb5b146102ab578063a45421e7146102b3578063a6d4b502146102bb57610182565b806371de9c10116100bd57806371de9c10146102885780637a9e5e4b1461029057806386b28c3c146102a357610182565b806341cd04201461026b578063512119241461027357610182565b806317a459aa1161013a57806328119244116101145780632811924414610230578063380174e0146102435780633996e60a1461025857610182565b806317a459aa146101ea5780631e7660a0146101fd578063262d18f81461021d57610182565b806313af40351161016b57806313af4035146101ba578063148db7b5146101cf57806316be836c146101e257610182565b8063069d7a6f146101875780630d1fdd34146101a5575b600080fd5b61018f6102e8565b60405161019c9190611e56565b60405180910390f35b6101ad610300565b60405161019c9190611a9a565b6101cd6101c83660046118c0565b610324565b005b6101cd6101dd36600461192e565b610432565b6101ad6105f2565b6101cd6101f836600461194d565b610616565b61021061020b3660046118c0565b61070f565b60405161019c9190611b9b565b6101cd61022b36600461197d565b610724565b6101cd61023e36600461194d565b610e62565b61024b610f67565b60405161019c9190611baf565b6101cd6102663660046118e3565b610fa0565b6101ad6113db565b61027b6113f7565b60405161019c9190611b5f565b61027b6114b6565b6101cd61029e3660046118c0565b6114da565b6101ad6115e4565b6101ad611600565b61018f61161c565b6102c3611648565b60405161019c9190611e73565b6101cd611370565b6101ad61166c565b61027b611688565b6002546fffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b610352336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b6103bd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a250565b610460336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b6104cb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b3360009081526003602052604081205460ff1660028111156104e957fe5b14610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611cd5565b60405180910390fd5b600081600281111561053757fe5b141561056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611de8565b33600090815260036020526040902080548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360028111156105b357fe5b02179055507f0d34da4cb8cb7b390f99942c84e2a40502ce8af0740de2790ab346d69b486b8e816040516105e79190611b9b565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b610644336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b6106af57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600280546fffffffffffffffffffffffffffffffff8084167001000000000000000000000000000000000291161790556040517fabbdd4ac28cf4c177dfe6040161376471a0d8abeafae674e8a953218d2bc31b4906105e7908390611e56565b60036020526000908152604090205460ff1681565b60005a905081421115610763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611db1565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef146107be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611bc2565b6107ec336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b610822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611c9e565b73ffffffffffffffffffffffffffffffffffffffff831661086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611c30565b73ffffffffffffffffffffffffffffffffffffffff86163014156108bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611e1f565b600061090086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117dd92505050565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f23b872dd00000000000000000000000000000000000000000000000000000000141561097e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611d0c565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f3dbb202b0000000000000000000000000000000000000000000000000000000014156109fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611d0c565b6000610a3f898989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152503a92506117e4915050565b6006819055600480547fffffffffffffffffffffffff000000000000000000000000000000000000000090811633179091556005805473ffffffffffffffffffffffffffffffffffffffff8c16921682179055604051919250600091829190610aab908b908b90611a6e565b6000604051808303816000865af19150503d8060008114610ae8576040519150601f19603f3d011682016040523d82523d6000602084013e610aed565b606091505b50915091508180610bc35750604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000060208201529051610b3b9190602401611baf565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a000000000000000000000000000000000000000000000000000000000178152915190912082519183019190912014155b80610c025750600273ffffffffffffffffffffffffffffffffffffffff8b1660009081526003602052604090205460ff166002811115610bff57fe5b14155b610c38576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611d43565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef60065560005a6002546040519188036fffffffffffffffffffffffffffffffff808316360270010000000000000000000000000000000090930416919091010191507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633dbb202b907f0000000000000000000000000000000000000000000000000000000000000000907f9d21cd150000000000000000000000000000000000000000000000000000000090610d329089908e908a15908990602401611b68565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009485161790525160e085901b9092168252610de592917f000000000000000000000000000000000000000000000000000000000000000090600401611b1a565b600060405180830381600087803b158015610dff57600080fd5b505af1158015610e13573d6000803e3d6000fd5b50505050837fd118217a540bf32db22ebd89e392054a9d0f5e30e6bfa753a87baa44ec0a60c633851584604051610e4c93929190611abb565b60405180910390a2505050505050505050505050565b610e90336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b610efb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600280547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff83161790556040517f4ca5451bbfb8d7f0ba4b6a4faed2872dbcb07253f32a52bd5456ce8b067ffadf906105e7908390611e56565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525081565b610fce336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b61103957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b60055473ffffffffffffffffffffffffffffffffffffffff16331461108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611bf9565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef14156110e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611c67565b60023360009081526003602052604090205460ff16600281111561110657fe5b1461113d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052090611d7a565b600454604051600091829173ffffffffffffffffffffffffffffffffffffffff868116927f23b872dd0000000000000000000000000000000000000000000000000000000092611197929091169033908890602401611ae9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516112209190611a7e565b6000604051808303816000865af19150503d806000811461125d576040519150601f19603f3d011682016040523d82523d6000602084013e611262565b606091505b5091509150816040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000815250906112d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105209190611baf565b508051156113d55780516020141561137057808060200190518101906112fc919061190e565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f000000000000000000008152509061136a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105209190611baf565b506113d5565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290517f08c379a00000000000000000000000000000000000000000000000000000000081526105209190600401611baf565b50505050565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290516114399190602401611baf565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a0000000000000000000000000000000000000000000000000000000001781529051902081565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef81565b611508336000357fffffffff000000000000000000000000000000000000000000000000000000001661168e565b61157357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178083556040519116917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad91a250565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60025470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600073ffffffffffffffffffffffffffffffffffffffff83163014156116b6575060016117d7565b60015473ffffffffffffffffffffffffffffffffffffffff848116911614156116e1575060016117d7565b60005473ffffffffffffffffffffffffffffffffffffffff16806117095760009150506117d7565b604080517fb700961300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301523060248301527fffffffff000000000000000000000000000000000000000000000000000000008616604483015291519183169163b700961391606480820192602092909190829003018186803b1580156117a757600080fd5b505afa1580156117bb573d6000803e3d6000fd5b505050506040513d60208110156117d157600080fd5b50519150505b92915050565b6020015190565b600084848484604051602001808581526020018473ffffffffffffffffffffffffffffffffffffffff1660601b815260140183805190602001908083835b6020831061185f57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611822565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052920193845250604080518085038152938201905282519201919091209998505050505050505050565b6000602082840312156118d1578081fd5b81356118dc81611eb0565b9392505050565b600080604083850312156118f5578081fd5b823561190081611eb0565b946020939093013593505050565b60006020828403121561191f578081fd5b815180151581146118dc578182fd5b60006020828403121561193f578081fd5b8135600381106118dc578182fd5b60006020828403121561195e578081fd5b81356fffffffffffffffffffffffffffffffff811681146118dc578182fd5b60008060008060008060a08789031215611995578182fd5b8635955060208701356119a781611eb0565b9450604087013567ffffffffffffffff808211156119c3578384fd5b818901915089601f8301126119d6578384fd5b8135818111156119e4578485fd5b8a60208285010111156119f5578485fd5b6020830196508095505050506060870135611a0f81611eb0565b80925050608087013590509295509295509295565b60008151808452611a3c816020860160208601611e84565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b60008251611a90818460208701611e84565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9390931683529015156020830152604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600073ffffffffffffffffffffffffffffffffffffffff8516825260606020830152611b496060830185611a24565b905063ffffffff83166040830152949350505050565b90815260200190565b93845273ffffffffffffffffffffffffffffffffffffffff92909216602084015215156040830152606082015260800190565b6020810160038310611ba957fe5b91905290565b6000602082526118dc6020830184611a24565b60208082526011908201527f414c52454144595f455845435554494e47000000000000000000000000000000604082015260600190565b60208082526014908201527f4e4f545f43555252454e545f5354524154454759000000000000000000000000604082015260600190565b6020808252600e908201527f4e4545445f524543495049454e54000000000000000000000000000000000000604082015260600190565b60208082526013908201527f4e4f5f4143544956455f455845435554494f4e00000000000000000000000000604082015260600190565b6020808252600c908201527f554e415554484f52495a45440000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f414c52454144595f524547495354455245440000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f43414c4c444154410000000000000000000000000000000000604082015260600190565b6020808252600b908201527f484152445f524556455254000000000000000000000000000000000000000000604082015260600190565b60208082526016908201527f554e535550504f525445445f5249534b5f4c4556454c00000000000000000000604082015260600190565b6020808252600d908201527f504153545f444541444c494e4500000000000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f5249534b5f4c4556454c0000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f53545241544547590000000000000000000000000000000000604082015260600190565b6fffffffffffffffffffffffffffffffff91909116815260200190565b63ffffffff91909116815260200190565b60005b83811015611e9f578181015183820152602001611e87565b838111156113d55750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611ed257600080fd5b5056fea164736f6c6343000706000a";

export class L1NovaExecutionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _L2_NOVA_REGISTRY_ADDRESS: string,
    _CROSS_DOMAIN_MESSENGER: string,
    _EXEC_COMPLETED_MESSAGE_GAS_LIMIT: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1NovaExecutionManager> {
    return super.deploy(
      _L2_NOVA_REGISTRY_ADDRESS,
      _CROSS_DOMAIN_MESSENGER,
      _EXEC_COMPLETED_MESSAGE_GAS_LIMIT,
      overrides || {}
    ) as Promise<L1NovaExecutionManager>;
  }
  getDeployTransaction(
    _L2_NOVA_REGISTRY_ADDRESS: string,
    _CROSS_DOMAIN_MESSENGER: string,
    _EXEC_COMPLETED_MESSAGE_GAS_LIMIT: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _L2_NOVA_REGISTRY_ADDRESS,
      _CROSS_DOMAIN_MESSENGER,
      _EXEC_COMPLETED_MESSAGE_GAS_LIMIT,
      overrides || {}
    );
  }
  attach(address: string): L1NovaExecutionManager {
    return super.attach(address) as L1NovaExecutionManager;
  }
  connect(signer: Signer): L1NovaExecutionManager__factory {
    return super.connect(signer) as L1NovaExecutionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1NovaExecutionManagerInterface {
    return new utils.Interface(_abi) as L1NovaExecutionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1NovaExecutionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L1NovaExecutionManager;
  }
}
