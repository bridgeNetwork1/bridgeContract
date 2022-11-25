/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FeeController,
  FeeControllerInterface,
} from "../../contracts/FeeController";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IController",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "contract Isettings",
        name: "_settings",
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
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AddressExemptionStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "AssetIncentiveStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newIncentive",
        type: "uint256",
      },
    ],
    name: "AssetIncentiveUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "BrgHoldingIncentiveStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevBrgHoldingIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBrgHoldingIncentive",
        type: "uint256",
      },
    ],
    name: "BrgHoldingIncentiveUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevBrgHoldingThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBrgHoldingThreshold",
        type: "uint256",
      },
    ],
    name: "BrgHoldingThresholdUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevVal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVal",
        type: "uint256",
      },
    ],
    name: "DefaultAssetIncentivePercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevVal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVal",
        type: "uint256",
      },
    ],
    name: "DefaultUserIncentivePercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "UserIncentiveStatusChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousIncentive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentIncentive",
        type: "uint256",
      },
    ],
    name: "UserIncentiveUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "exemptionStatus",
        type: "bool",
      },
    ],
    name: "userExemptStatusChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateAddressExemption",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateAssetIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateBRDGHoldingIncentive",
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
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateIndexedTokenIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "activateIndexedUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "activateUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "deActivateIndexedUserIncentive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAssetIncentivePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultUserIncentivePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "exemptAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getBridgeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "indexedTokenIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "incentivePercentage",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
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
    name: "indexedUserIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "incentivePercentage",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
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
    name: "isExempted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settings",
    outputs: [
      {
        internalType: "contract Isettings",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tokenHolderIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "incentivePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenHoldingLevel",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "updateBRDGHoldingIncentiveThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateDefaultAssetIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateDefaultUserIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateIndexedTokenIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenHoldingLevel",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateTokenHoldingIncentivePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "updateUserExemptionPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "useAssetIncentive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useBRDGHoldingIncentive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useExemption",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "useUserIncentive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526521a7a6a6a7a760d11b600255634245544160e01b60035564414c50484160d81b600455600a600755600a6008553480156200003f57600080fd5b506040516200288738038062002887833981016040819052620000629162000137565b600080546001600160a01b039384166001600160a01b0319918216178255600180549390941692169190911782556040805180820182526003808252690a968163f0a57b4000006020808401918252600254865260098082528587209451855591519387019390935583518085018552600781526a01a784379d99db42000000818501908152925486528184528486209051815591519186019190915582518084018452600f81526a084595161401484a0000008184019081526004548652919092529190922091518255519101556200018e565b600080604083850312156200014a578182fd5b8251620001578162000175565b60208401519092506200016a8162000175565b809150509250929050565b6001600160a01b03811681146200018b57600080fd5b50565b6126e9806200019e6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80639b9d2455116100f9578063ba9527fe11610097578063e06174e411610071578063e06174e4146103f4578063f2b804071461041f578063f2dcc1eb14610432578063f77c47911461043b576101a9565b8063ba9527fe146103c1578063c0079605146103d4578063c548d9b7146103e7576101a9565b8063aaddc3be116100d3578063aaddc3be1461034d578063b306760d14610360578063b43b5ebc14610372578063b4f21e4d14610385576101a9565b80639b9d2455146102fd5780639fcb58bf14610310578063a3019cf81461033a576101a9565b80633e8addf111610166578063632b733311610140578063632b73331461028457806368a8d9f11461029857806368efca89146102d757806394018c4a146102ea576101a9565b80633e8addf11461024b578063401912941461025e5780635ebbc33014610271576101a9565b806302a03d36146101ae578063079eb7fb146101ca57806308fdf610146101fd57806312d5683d1461021257806322193f911461022557806336a17d1414610238575b600080fd5b6101b760085481565b6040519081526020015b60405180910390f35b6101ed6101d8366004612455565b60056020526000908152604090205460ff1681565b60405190151581526020016101c1565b61021061020b366004612574565b61044e565b005b610210610220366004612574565b610791565b610210610233366004612524565b610aa6565b610210610246366004612524565b610c52565b610210610259366004612455565b610df0565b61021061026c3660046124f9565b610fed565b61021061027f36600461255c565b6111ed565b6006546101ed906301000000900460ff1681565b6102c26102a6366004612455565b600b602052600090815260409020805460019091015460ff1682565b604080519283529015156020830152016101c1565b6102106102e5366004612524565b61138d565b6102106102f83660046124cc565b611521565b61021061030b366004612524565b61173c565b6102c261031e366004612455565b600a602052600090815260409020805460019091015460ff1682565b6102106103483660046124cc565b6118d7565b61021061035b3660046124f9565b611a58565b6006546101ed90610100900460ff1681565b6006546101ed9062010000900460ff1681565b6103ac61039336600461255c565b6009602052600090815260409020805460019091015482565b604080519283526020830191909152016101c1565b6101b76103cf366004612494565b611c4e565b6102106103e236600461255c565b611eb4565b6006546101ed9060ff1681565b600154610407906001600160a01b031681565b6040516001600160a01b0390911681526020016101c1565b61021061042d366004612455565b612054565b6101b760075481565b600054610407906001600160a01b031681565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561049257600080fd5b505afa1580156104a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ca9190612478565b6001600160a01b031614806105555750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561051d57600080fd5b505afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105559190612540565b61057a5760405162461bcd60e51b8152600401610571906125ad565b60405180910390fd5b60025482148061058b575060035482145b80610597575060045482145b6105df5760405162461bcd60e51b8152602060048201526019602482015278696e76616c696420686f6c64696e6720496e63656e7469766560381b6044820152606401610571565b60006105ea8361222a565b9050600454811415610668576003546000908152600960205260409020600101548211801561063b575060025460009081526009602052604080822060019081015460035484529190922090910154115b801561065a575060025460009081526009602052604090206001015415155b61066357600080fd5b610730565b6003548114156106cc576004546000908152600960205260409020600101548210801561063b57506002546000908152600960205260409020600101548211801561065a575060025460009081526009602052604090206001015461066357600080fd5b600254811415610730576003546000908152600960205260408082206001908101546004548452919092209091015411801561071b575060035460009081526009602052604090206001015482105b80156107275750600082115b61073057600080fd5b6000818152600960209081526040918290206001015482519081529081018490527f380370fc16cb5de7ba98c093cb2abe6e49cccb3e3f001e519ebcfe82f5cf139a910160405180910390a160009081526009602052604090206001015550565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156107d557600080fd5b505afa1580156107e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080d9190612478565b6001600160a01b031614806108985750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561086057600080fd5b505afa158015610874573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108989190612540565b6108b45760405162461bcd60e51b8152600401610571906125ad565b6002548214806108c5575060035482145b806108d1575060045482145b6109195760405162461bcd60e51b8152602060048201526019602482015278696e76616c696420686f6c64696e6720496e63656e7469766560381b6044820152606401610571565b60006109248361222a565b600081815260096020526040902054600454919250908214156109a357600354600090815260096020526040902054831180156109795750600254600090815260096020526040808220546003548352912054115b8015610995575060025460009081526009602052604090205415155b61099e57600080fd5b610a55565b6003548214156109fe5760045460009081526009602052604090205483108015610979575060025460009081526009602052604090205483118015610995575060025460009081526009602052604090205461099e57600080fd5b600254821415610a5557600354600090815260096020526040808220546004548352912054118015610a40575060035460009081526009602052604090205483105b8015610a4c5750600083115b610a5557600080fd5b60008481526009602090815260409182902085905581518381529081018590527f240772d6994e765d6a8e5bdf73ae5fff4eb4de779e7ae3b36ae4f458f590b552910160405180910390a150505050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610aea57600080fd5b505afa158015610afe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b229190612478565b6001600160a01b03161480610bad5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610b7557600080fd5b505afa158015610b89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bad9190612540565b610bc95760405162461bcd60e51b8152600401610571906125ad565b60065460ff63010000009091041615158115151415610bfa5760405162461bcd60e51b8152600401610571906125e4565b6006805482151563010000000263ff000000199091161790556040517fe5184386e7442a96171dfb41f23bdc78158de15c8dd9203ba44911d1b970d4f990610c4790831515815260200190565b60405180910390a150565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610c9657600080fd5b505afa158015610caa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cce9190612478565b6001600160a01b03161480610d595750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610d2157600080fd5b505afa158015610d35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d599190612540565b610d755760405162461bcd60e51b8152600401610571906125ad565b60065460ff620100009091041615158115151415610da55760405162461bcd60e51b8152600401610571906125e4565b60068054821515620100000262ff0000199091161790556040517f91165ce3ea12d2f38c117706dca0cfdeefca89338a64dff731ab3c30a7b890e390610c4790831515815260200190565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610e3457600080fd5b505afa158015610e48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6c9190612478565b6001600160a01b03161480610ef75750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015610ebf57600080fd5b505afa158015610ed3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef79190612540565b610f135760405162461bcd60e51b8152600401610571906125ad565b6001600160a01b0381166000908152600b602052604090206001015460ff1615610f705760405162461bcd60e51b815260206004820152600e60248201526d616c72656164792061637469766560901b6044820152606401610571565b6040805180820182526007548152600160208083018281526001600160a01b0386166000818152600b8452869020945185559051938301805460ff191694151594909417909355925190815290917f4cc34974eb9acb4b7c62e2ce960332b3bde023d0004e5f0bdeee9c458cc2aa9891015b60405180910390a250565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561103157600080fd5b505afa158015611045573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110699190612478565b6001600160a01b031614806110f45750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b1580156110bc57600080fd5b505afa1580156110d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f49190612540565b6111105760405162461bcd60e51b8152600401610571906125ad565b6001600160a01b0382166000908152600a602052604090206001015460ff1661118d5760405162461bcd60e51b815260206004820152602960248201527f466565436f6e74726f6c6c65723a206173736574206578656d7074696f6e206e6044820152686f742061637469766560b81b6064820152608401610571565b6001600160a01b0382166000818152600a6020908152604091829020805490859055825181815291820185905292917f2c4b2f302ea040ab407534b2d7cc4bc99334eb41a2b3f2c6f363fd0a1648f5d491015b60405180910390a2505050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561123157600080fd5b505afa158015611245573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112699190612478565b6001600160a01b031614806112f45750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b1580156112bc57600080fd5b505afa1580156112d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f49190612540565b6113105760405162461bcd60e51b8152600401610571906125ad565b6032811061134c5760405162461bcd60e51b8152602060048201526009602482015268696e76616c6964202560b81b6044820152606401610571565b60075460408051918252602082018390527faee9027cd52cd36ed373913dcea55a98babe1ff97f4a046828a3b177ea49c305910160405180910390a1600755565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156113d157600080fd5b505afa1580156113e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114099190612478565b6001600160a01b031614806114945750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561145c57600080fd5b505afa158015611470573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114949190612540565b6114b05760405162461bcd60e51b8152600401610571906125ad565b60065460ff16151581151514156114d95760405162461bcd60e51b8152600401610571906125e4565b60405181151581527fe41c88aff510062186556cad0aed9c7a0d4b346a62664358e69f4a40f43e9ca99060200160405180910390a16006805460ff1916911515919091179055565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561156557600080fd5b505afa158015611579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159d9190612478565b6001600160a01b031614806116285750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b1580156115f057600080fd5b505afa158015611604573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116289190612540565b6116445760405162461bcd60e51b8152600401610571906125ad565b6001600160a01b0382166000908152600a602052604090206001015460ff16151581151514156116865760405162461bcd60e51b8152600401610571906125e4565b80156116b8576001600160a01b0382166000908152600a60205260409020600101805460ff1916821515179055611704565b604080518082018252600854815282151560208083019182526001600160a01b0386166000908152600a909152929092209051815590516001909101805460ff19169115159190911790555b604051600181527fe5184386e7442a96171dfb41f23bdc78158de15c8dd9203ba44911d1b970d4f99060200160405180910390a15050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561178057600080fd5b505afa158015611794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b89190612478565b6001600160a01b031614806118435750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561180b57600080fd5b505afa15801561181f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118439190612540565b61185f5760405162461bcd60e51b8152600401610571906125ad565b60065460ff610100909104161515811515141561188e5760405162461bcd60e51b8152600401610571906125e4565b600680548215156101000261ff00199091161790556040517f4b35d602e0cd107e255cddff136a82aa52d7e52cbeb0add60ad2044ea6b1649190610c4790831515815260200190565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561191b57600080fd5b505afa15801561192f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119539190612478565b6001600160a01b0316146119a95760405162461bcd60e51b815260206004820152601760248201527f63616c6c6572206973206e6f7420746865206f776e65720000000000000000006044820152606401610571565b6001600160a01b03821660009081526005602052604090205460ff16151581151514156119e85760405162461bcd60e51b8152600401610571906125e4565b816001600160a01b03167f4cc34974eb9acb4b7c62e2ce960332b3bde023d0004e5f0bdeee9c458cc2aa9882604051611a25911515815260200190565b60405180910390a26001600160a01b03919091166000908152600560205260409020805460ff1916911515919091179055565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015611a9c57600080fd5b505afa158015611ab0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ad49190612478565b6001600160a01b03161480611b5f5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015611b2757600080fd5b505afa158015611b3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5f9190612540565b611b7b5760405162461bcd60e51b8152600401610571906125ad565b6001600160a01b0382166000908152600b602052604090206001015460ff16611bf75760405162461bcd60e51b815260206004820152602860248201527f466565436f6e74726f6c6c65723a2075736572206578656d7074696f6e206e6f604482015267742061637469766560c01b6064820152608401610571565b6001600160a01b0382166000818152600b6020908152604091829020805490859055825181815291820185905292917f8d27423b5b97272ddd630edf11c97bddbc21ef3df22e50023ce38cb00d70244691016111e0565b60015460408051633199692b60e11b815290516000926001600160a01b031691636332d256916004808301926020929190829003018186803b158015611c9357600080fd5b505afa158015611ca7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ccb9190612540565b611cd757506000611eae565b60015460408051638375bb3960e01b815290516000926001600160a01b031691638375bb39916004808301926020929190829003018186803b158015611d1c57600080fd5b505afa158015611d30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d549190612595565b60065490915060009060ff168015611d8457506001600160a01b03851660009081526005602052604090205460ff165b15611d9457600092505050611eae565b60065462010000900460ff1615611def576001600160a01b0384166000908152600a602052604090206001015460ff1615611def576001600160a01b0384166000908152600a6020526040902054611dec9082612609565b90505b6006546301000000900460ff1615611e4b576001600160a01b0385166000908152600b602052604090206001015460ff1615611e4b576001600160a01b0385166000908152600b6020526040902054611e489082612609565b90505b600654610100900460ff1615611e76576000611e6686612266565b9050611e728183612609565b9150505b60648110611e8957600092505050611eae565b6064611e958383612641565b611e9f9190612621565b611ea99083612660565b925050505b92915050565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015611ef857600080fd5b505afa158015611f0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f309190612478565b6001600160a01b03161480611fbb5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b158015611f8357600080fd5b505afa158015611f97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fbb9190612540565b611fd75760405162461bcd60e51b8152600401610571906125ad565b603281106120135760405162461bcd60e51b8152602060048201526009602482015268696e76616c6964202560b81b6044820152606401610571565b60085460408051918252602082018390527fb04bf79637ebb6d6a977766f7b02543d5d6607154feb1668c15e2c02c27ae047910160405180910390a1600855565b60005460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561209857600080fd5b505afa1580156120ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120d09190612478565b6001600160a01b0316148061215b5750600054604051630935e01b60e21b81523360048201526001600160a01b03909116906324d7806c9060240160206040518083038186803b15801561212357600080fd5b505afa158015612137573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215b9190612540565b6121775760405162461bcd60e51b8152600401610571906125ad565b6001600160a01b0381166000908152600b602052604090206001015460ff166121d85760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e4819195858dd1a5d985d1959606a1b6044820152606401610571565b6001600160a01b0381166000818152600b60209081526040808320600101805460ff19169055519182527f4cc34974eb9acb4b7c62e2ce960332b3bde023d0004e5f0bdeee9c458cc2aa989101610fe2565b600060025482141561223f5750600254612261565b6003548214156122525750600354612261565b6004548214156101a957506004545b919050565b600080600160009054906101000a90046001600160a01b03166001600160a01b0316635d911d126040518163ffffffff1660e01b815260040160206040518083038186803b1580156122b757600080fd5b505afa1580156122cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ef9190612478565b6040516370a0823160e01b81526001600160a01b03858116600483015291909116906370a082319060240160206040518083038186803b15801561233257600080fd5b505afa158015612346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236a9190612595565b60045460009081526009602052604090206001015490915081106123a1575050600454600090815260096020526040902054612261565b600454600090815260096020526040902060010154811080156123d857506003546000908152600960205260409020600101548110155b156123f6575050600354600090815260096020526040902054612261565b6003546000908152600960205260409020600101548110801561242d57506002546000908152600960205260409020600101548110155b1561244b575050600254600090815260096020526040902054612261565b6000915050612261565b600060208284031215612466578081fd5b81356124718161268d565b9392505050565b600060208284031215612489578081fd5b81516124718161268d565b600080604083850312156124a6578081fd5b82356124b18161268d565b915060208301356124c18161268d565b809150509250929050565b600080604083850312156124de578182fd5b82356124e98161268d565b915060208301356124c1816126a5565b6000806040838503121561250b578182fd5b82356125168161268d565b946020939093013593505050565b600060208284031215612535578081fd5b8135612471816126a5565b600060208284031215612551578081fd5b8151612471816126a5565b60006020828403121561256d578081fd5b5035919050565b60008060408385031215612586578182fd5b50508035926020909101359150565b6000602082840312156125a6578081fd5b5051919050565b60208082526017908201527f63616c6c6572206973206e6f74207468652061646d696e000000000000000000604082015260600190565b6020808252600b908201526a185b1c9958591e481cd95d60aa1b604082015260600190565b6000821982111561261c5761261c612677565b500190565b60008261263c57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561265b5761265b612677565b500290565b60008282101561267257612672612677565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146126a257600080fd5b50565b80151581146126a257600080fdfea264697066735822122081d04088b65399d82f39177834fa2a28d1e6f0eb8a7df6e0a4ab5139c451cde964736f6c63430008020033";

type FeeControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeController__factory extends ContractFactory {
  constructor(...args: FeeControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _controller: PromiseOrValue<string>,
    _settings: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeController> {
    return super.deploy(
      _controller,
      _settings,
      overrides || {}
    ) as Promise<FeeController>;
  }
  override getDeployTransaction(
    _controller: PromiseOrValue<string>,
    _settings: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, _settings, overrides || {});
  }
  override attach(address: string): FeeController {
    return super.attach(address) as FeeController;
  }
  override connect(signer: Signer): FeeController__factory {
    return super.connect(signer) as FeeController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeControllerInterface {
    return new utils.Interface(_abi) as FeeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeController {
    return new Contract(address, _abi, signerOrProvider) as FeeController;
  }
}
