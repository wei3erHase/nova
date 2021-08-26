/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
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
        indexed: true,
        internalType: "bytes32",
        name: "execHash",
        type: "bytes32",
      },
      {
        indexed: true,
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
        components: [
          {
            internalType: "uint32",
            name: "calldataByteGasEstimate",
            type: "uint32",
          },
          {
            internalType: "uint96",
            name: "missingGasEstimate",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "strategyCallGasBuffer",
            type: "uint96",
          },
          {
            internalType: "uint32",
            name: "execCompletedMessageGasLimit",
            type: "uint32",
          },
        ],
        indexed: false,
        internalType: "struct L1_NovaExecutionManager.GasConfig",
        name: "newGasConfig",
        type: "tuple",
      },
    ],
    name: "GasConfigUpdated",
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
        indexed: true,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
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
    name: "L1_NOVA_APPROVAL_ESCROW",
    outputs: [
      {
        internalType: "contract L1_NovaApprovalEscrow",
        name: "",
        type: "address",
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
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
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
    inputs: [],
    name: "gasConfig",
    outputs: [
      {
        internalType: "uint32",
        name: "calldataByteGasEstimate",
        type: "uint32",
      },
      {
        internalType: "uint96",
        name: "missingGasEstimate",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "strategyCallGasBuffer",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "execCompletedMessageGasLimit",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "calldataByteGasEstimate",
            type: "uint32",
          },
          {
            internalType: "uint96",
            name: "missingGasEstimate",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "strategyCallGasBuffer",
            type: "uint96",
          },
          {
            internalType: "uint32",
            name: "execCompletedMessageGasLimit",
            type: "uint32",
          },
        ],
        internalType: "struct L1_NovaExecutionManager.GasConfig",
        name: "newGasConfig",
        type: "tuple",
      },
    ],
    name: "updateGasConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610160604052600d60e081905262030d4061010052611388610120526216e360610140526002805463ffffffff1916909117600160201b600160801b03191666030d400000000017600160801b600160e01b03191661027160831b176001600160e01b031661b71b60e51b1790557ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6006553480156200009e57600080fd5b506040516200250638038062002506833981016040819052620000c19162000170565b600180546001600160a01b031916339081179091556040518291907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a26001600160601b0319606091821b81166080529083901b1660a0526040516200012b9062000162565b604051809103906000f08015801562000148573d6000803e3d6000fd5b5060601b6001600160601b03191660c05250620001c79050565b61037e806200218883390190565b6000806040838503121562000183578182fd5b82516200019081620001ae565b6020840151909250620001a381620001ae565b809150509250929050565b6001600160a01b0381168114620001c457600080fd5b50565b60805160601c60a05160601c60c05160601c611f7262000216600039806108065280610bc752806114455250806102af5280610fe35250806105b85280610b415280610fa75250611f726000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806359f7cdfd116100cd5780638da5cb5b11610081578063bf7e214f11610066578063bf7e214f14610295578063eb714e191461029d578063f705441f146102a55761016c565b80638da5cb5b14610285578063b7daba361461028d5761016c565b806371de9c10116100b257806371de9c10146102625780637a9e5e4b1461026a57806386b28c3c1461027d5761016c565b806359f7cdfd1461023c5780636f38b1f71461024f5761016c565b8063380174e01161012457806341cd04201161010957806341cd042014610207578063490a44321461020f57806351211924146102275761016c565b8063380174e0146101df5780633996e60a146101f45761016c565b8063148db7b511610155578063148db7b5146101a457806316be836c146101b75780631e7660a0146101bf5761016c565b80630d1fdd341461017157806313af40351461018f575b600080fd5b6101796102ad565b60405161018691906119d3565b60405180910390f35b6101a261019d36600461180f565b6102d1565b005b6101a26101b2366004611876565b6103df565b6101796105b6565b6101d26101cd36600461180f565b6105da565b6040516101869190611abd565b6101e76105ef565b6040516101869190611ad1565b6101a261020236600461182b565b610628565b610179610906565b610217610922565b6040516101869493929190611d7e565b61022f610982565b6040516101869190611a81565b6101a261024a3660046118ac565b610a41565b6101a261025d366004611895565b611173565b61022f611256565b6101a261027836600461180f565b61127a565b610179611384565b6101796113a0565b6101a26113bc565b610179611421565b61022f61143d565b610179611443565b7f000000000000000000000000000000000000000000000000000000000000000081565b6102ff336000357fffffffff0000000000000000000000000000000000000000000000000000000016611467565b61036a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a250565b61040d336000357fffffffff0000000000000000000000000000000000000000000000000000000016611467565b61047857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b3360009081526003602052604081205460ff16600281111561049657fe5b146104d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611bc0565b60405180910390fd5b60008160028111156104e457fe5b141561051c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611c9c565b33600090815260036020526040902080548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561056057fe5b02179055503373ffffffffffffffffffffffffffffffffffffffff167f892277b6d17d537b345501c9a696b3765ee5be213c8dbaf24193a93d29206d46826040516105ab9190611abd565b60405180910390a250565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020526000908152604090205460ff1681565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525081565b610656336000357fffffffff0000000000000000000000000000000000000000000000000000000016611467565b6106c157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b60055473ffffffffffffffffffffffffffffffffffffffff163314610712576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611b1b565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef141561076e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611b52565b60023360009081526003602052604090205460ff16600281111561078e57fe5b146107c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611c2e565b600480546040517f178c477500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169363178c4775936108419388938893921691339101611a39565b602060405180830381600087803b15801561085b57600080fd5b505af115801561086f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108939190611856565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525090610901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd9190611ad1565b505050565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b60025463ffffffff808216916bffffffffffffffffffffffff64010000000082048116927001000000000000000000000000000000008304909116917c010000000000000000000000000000000000000000000000000000000090041684565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290516109c49190602401611ad1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a0000000000000000000000000000000000000000000000000000000001781529051902081565b60005a905081421115610a80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611c65565b610aae336000357fffffffff0000000000000000000000000000000000000000000000000000000016611467565b610ae4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611b89565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef14610b3f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611ae4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610bc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611cd3565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610c4b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611cd3565b73ffffffffffffffffffffffffffffffffffffffff8716301415610c9b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611cd3565b6000610ce2898989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152503a92508b91506115b69050565b6006819055600480547fffffffffffffffffffffffff000000000000000000000000000000000000000090811633179091556005805473ffffffffffffffffffffffffffffffffffffffff8c169216821790559091506000908190610da05a60025490870390610d9a906bffffffffffffffffffffffff64010000000082048116918391700100000000000000000000000000000000820416908290610d9390369063ffffffff9081169061169a16565b8f90611714565b90611714565b8a8a604051610db09291906119c3565b60006040518083038160008787f1925050503d8060008114610dee576040519150601f19603f3d011682016040523d82523d6000602084013e610df3565b606091505b50915091508180610ec95750604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000060208201529051610e419190602401611ad1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a000000000000000000000000000000000000000000000000000000000178152915190912082519183019190912014155b80610f085750600273ffffffffffffffffffffffffffffffffffffffff8b1660009081526003602052604090205460ff166002811115610f0557fe5b14155b610f3e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611bf7565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6006556000610fa35a60025490870390610f9d906bffffffffffffffffffffffff640100000000820416908290369063ffffffff9081169061169a16565b9061178b565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633dbb202b7f0000000000000000000000000000000000000000000000000000000000000000639d21cd1560e01b878b8815876040516024016110229493929190611a8a565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529181526020820180517fffffffff000000000000000000000000000000000000000000000000000000009485167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff909116179052600254905160e086901b90931683526110e193927c010000000000000000000000000000000000000000000000000000000090910463ffffffff16906004016119f4565b600060405180830381600087803b1580156110fb57600080fd5b505af115801561110f573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff16847fd118217a540bf32db22ebd89e392054a9d0f5e30e6bfa753a87baa44ec0a60c685158460405161115d929190611a71565b60405180910390a3505050505050505050505050565b6111a1336000357fffffffff0000000000000000000000000000000000000000000000000000000016611467565b61120c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b8060026112198282611db3565b9050507fa604db6220233356717be4698af73cbc2b0bae243eead45a30704c212433aee08160405161124b9190611d0a565b60405180910390a150565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef81565b6112a8336000357fffffffff0000000000000000000000000000000000000000000000000000000016611467565b61131357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178083556040519116917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad91a250565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290517f08c379a00000000000000000000000000000000000000000000000000000000081526104cd9190600401611ad1565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600073ffffffffffffffffffffffffffffffffffffffff831630141561148f575060016115b0565b60015473ffffffffffffffffffffffffffffffffffffffff848116911614156114ba575060016115b0565b60005473ffffffffffffffffffffffffffffffffffffffff16806114e25760009150506115b0565b604080517fb700961300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301523060248301527fffffffff000000000000000000000000000000000000000000000000000000008616604483015291519183169163b700961391606480820192602092909190829003018186803b15801561158057600080fd5b505afa158015611594573d6000803e3d6000fd5b505050506040513d60208110156115aa57600080fd5b50519150505b92915050565b60008585858585604051602001808681526020018573ffffffffffffffffffffffffffffffffffffffff1660601b815260140184805190602001908083835b6020831061163257805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016115f5565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905292019485525083810192909252506040805180840383018152928101905281519101209998505050505050505050565b6000826116a9575060006115b0565b828202828482816116b657fe5b041461170d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611f456021913960400191505060405180910390fd5b9392505050565b60008282111561178557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60008282018381101561170d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b803561180a81611ef3565b919050565b600060208284031215611820578081fd5b813561170d81611ef3565b6000806040838503121561183d578081fd5b823561184881611ef3565b946020939093013593505050565b600060208284031215611867578081fd5b8151801515811461170d578182fd5b600060208284031215611887578081fd5b81356003811061170d578182fd5b6000608082840312156118a6578081fd5b50919050565b600080600080600080600060c0888a0312156118c6578283fd5b8735965060208801356118d881611ef3565b9550604088013567ffffffffffffffff808211156118f4578485fd5b818a0191508a601f830112611907578485fd5b813581811115611915578586fd5b8b6020828501011115611926578586fd5b60208301975080965050505060608801359250611945608089016117ff565b915060a0880135905092959891949750929550565b60008151808452815b8181101561197f57602081850181015186830182015201611963565b818111156119905782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8516825260606020830152611a23606083018561195a565b905063ffffffff83166040830152949350505050565b73ffffffffffffffffffffffffffffffffffffffff948516815260208101939093529083166040830152909116606082015260800190565b9115158252602082015260400190565b90815260200190565b93845273ffffffffffffffffffffffffffffffffffffffff92909216602084015215156040830152606082015260800190565b6020810160038310611acb57fe5b91905290565b60006020825261170d602083018461195a565b60208082526011908201527f414c52454144595f455845435554494e47000000000000000000000000000000604082015260600190565b60208082526014908201527f4e4f545f43555252454e545f5354524154454759000000000000000000000000604082015260600190565b60208082526013908201527f4e4f5f4143544956455f455845435554494f4e00000000000000000000000000604082015260600190565b6020808252600c908201527f554e415554484f52495a45440000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f414c52454144595f524547495354455245440000000000000000000000000000604082015260600190565b6020808252600b908201527f484152445f524556455254000000000000000000000000000000000000000000604082015260600190565b60208082526016908201527f554e535550504f525445445f5249534b5f4c4556454c00000000000000000000604082015260600190565b6020808252600d908201527f504153545f444541444c494e4500000000000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f5249534b5f4c4556454c0000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f53545241544547590000000000000000000000000000000000604082015260600190565b608081018235611d1981611f18565b63ffffffff9081168352602084013590611d3282611f2a565b6bffffffffffffffffffffffff9182166020850152604085013591611d5683611f2a565b919091166040840152606084013590611d6e82611f18565b8082166060850152505092915050565b63ffffffff94851681526bffffffffffffffffffffffff93841660208201529190921660408201529116606082015260800190565b8135611dbe81611f18565b63ffffffff81167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000008354161790508082556020830135611dfd81611f2a565b6fffffffffffffffffffffffff000000008160201b167fffffffffffffffffffffffffffffffff000000000000000000000000ffffffff8316179150508082556040830135611e4b81611f2a565b7bffffffffffffffffffffffff000000000000000000000000000000008160801b167fffffffff000000000000000000000000ffffffffffffffffffffffffffffffff8316179150508082556060830135611ea581611f18565b7fffffffff000000000000000000000000000000000000000000000000000000008160e01b167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff831617835550505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f1557600080fd5b50565b63ffffffff81168114611f1557600080fd5b6bffffffffffffffffffffffff81168114611f1557600080fdfe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c6343000706000a60a06040523360601b60805234801561001757600080fd5b5060805160601c6103456100396000398060cd528061031652506103456000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063178c47751461003b5780634719c36114610098575b600080fd5b6100846004803603608081101561005157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013591604082013581169160600135166100c9565b604080519115158252519081900360200190f35b6100a0610314565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16331461016f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830188905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938b169392918291908083835b6020831061024c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161020f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146102ae576040519150601f19603f3d011682016040523d82523d6000602084013e6102b3565b606091505b5091509150816102c85760009250505061030c565b805115610305578051602014156102fa578080602001905160208110156102ee57600080fd5b5051925061030c915050565b60009250505061030c565b6001925050505b949350505050565b7f00000000000000000000000000000000000000000000000000000000000000008156fea164736f6c6343000706000a";

export class L1NovaExecutionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _L2_NOVA_REGISTRY_ADDRESS: string,
    _CROSS_DOMAIN_MESSENGER: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1NovaExecutionManager> {
    return super.deploy(
      _L2_NOVA_REGISTRY_ADDRESS,
      _CROSS_DOMAIN_MESSENGER,
      overrides || {}
    ) as Promise<L1NovaExecutionManager>;
  }
  getDeployTransaction(
    _L2_NOVA_REGISTRY_ADDRESS: string,
    _CROSS_DOMAIN_MESSENGER: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _L2_NOVA_REGISTRY_ADDRESS,
      _CROSS_DOMAIN_MESSENGER,
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
