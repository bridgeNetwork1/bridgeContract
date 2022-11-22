/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BridgeSocket,
  BridgeSocketInterface,
} from "../../../contracts/bridgeSocket.sol/BridgeSocket";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Isettings",
        name: "_settings",
        type: "address",
      },
      {
        internalType: "contract IfeeController",
        name: "_feeController",
        type: "address",
      },
      {
        internalType: "contract Ibridge",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeRemittance",
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
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "transactionID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sendAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SendTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevFeeRemitance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "currentFeeRemitance",
        type: "address",
      },
    ],
    name: "feeRemitanceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "prevFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentFee",
        type: "uint256",
      },
    ],
    name: "feeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "currentFeeController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "currentSettings",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "currentBridge",
        type: "address",
      },
    ],
    name: "socketUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract Ibridge",
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
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
    ],
    name: "bridgeAsset",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeController",
    outputs: [
      {
        internalType: "contract IfeeController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feePercentage",
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
    name: "feeRemitance",
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
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
    ],
    name: "getAsset",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collectedFees",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "ownedRail",
            type: "bool",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeRemitance",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isSet",
            type: "bool",
          },
        ],
        internalType: "struct Ibridge.asset",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
    ],
    name: "getAssetLimits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getDirectswapAssetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "direct",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getForiegnAssetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "foriegn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNativeAssetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "native",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupportedChainIDs",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getTransactionFee",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainTo",
        type: "uint256",
      },
    ],
    name: "getTransactionGas",
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
    name: "innitialized",
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
    inputs: [
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
    ],
    name: "isForiegnAsset",
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
    inputs: [
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
    ],
    name: "isNativeAsset",
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
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
    ],
    name: "isSupportedChain",
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
    name: "maxFeePercentage",
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
    inputs: [],
    name: "pauseSocket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeRemitance",
        type: "address",
      },
    ],
    name: "updateFeeRemitance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IfeeController",
        name: "_feecontroller",
        type: "address",
      },
      {
        internalType: "contract Isettings",
        name: "_settings",
        type: "address",
      },
      {
        internalType: "contract Ibridge",
        name: "_bridge",
        type: "address",
      },
    ],
    name: "updateSocket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
    ],
    name: "validAsset",
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
  "0x60806040523480156200001157600080fd5b50604051620025f5380380620025f5833981016040819052620000349162000178565b6001600055620000443362000126565b6001600160a01b038116158015906200006557506001600160a01b03831615155b80156200007a57506001600160a01b03841615155b80156200008f57506001600160a01b03821615155b620000d25760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206164647265737360881b604482015260640160405180910390fd5b600280546001600160a01b039586166001600160a01b0319918216179091556003805494861694821694909417909355600480549285169284169290921790915560058054919093169116179055620001f8565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080600080608085870312156200018e578384fd5b84516200019b81620001df565b6020860151909450620001ae81620001df565b6040860151909350620001c181620001df565b6060860151909250620001d481620001df565b939692955090935050565b6001600160a01b0381168114620001f557600080fd5b50565b6123ed80620002086000396000f3fe6080604052600436106101b75760003560e01c80637f9a7901116100ec578063bf654aac1161008a578063dfc7d48811610064578063dfc7d488146104bb578063e06174e4146104db578063e78cea92146104fb578063f2fde38b1461051b576101b7565b8063bf654aac14610473578063d351e66e14610488578063dabc1cd61461049b576101b7565b80639012c4a8116100c65780639012c4a8146103fc578063961a8d5e1461041c5780639bff08d81461043b578063a001ecdd1461045d576101b7565b80637f9a7901146103a95780638bbd9d0e146103be5780638da5cb5b146103de576101b7565b80635c975abb11610159578063715018a611610133578063715018a61461033d578063749a1e73146103545780637a87b621146103745780637b8aa54f14610389576101b7565b80635c975abb146102ee5780636999b3771461030857806369d52a6114610328576101b7565b806330b8b2c61161019557806330b8b2c6146102495780634b54dbef146102765780635153d4671461029657806357b72022146102b6576101b7565b806305e96863146101bc5780631bdcd2b7146101f15780632014055d14610214575b600080fd5b3480156101c857600080fd5b506101dc6101d7366004611e72565b61053b565b60405190151581526020015b60405180910390f35b3480156101fd57600080fd5b506102066105e7565b6040519081526020016101e8565b34801561022057600080fd5b5061023461022f366004611e72565b610676565b604080519283526020830191909152016101e8565b34801561025557600080fd5b50610269610264366004611e72565b6107d1565b6040516101e891906121e1565b34801561028257600080fd5b50610206610291366004611e8e565b610991565b3480156102a257600080fd5b506101dc6102b13660046120e2565b610a28565b3480156102c257600080fd5b506005546102d6906001600160a01b031681565b6040516001600160a01b0390911681526020016101e8565b3480156102fa57600080fd5b506007546101dc9060ff1681565b34801561031457600080fd5b506003546102d6906001600160a01b031681565b34801561033457600080fd5b50610206610aab565b34801561034957600080fd5b50610352610b3b565b005b34801561036057600080fd5b506101dc61036f366004611e72565b610b4f565b34801561038057600080fd5b50610206610c91565b34801561039557600080fd5b506103526103a4366004611ff0565b610d19565b3480156103b557600080fd5b50610352610e25565b3480156103ca57600080fd5b506103526103d9366004611e72565b610eb6565b3480156103ea57600080fd5b506001546001600160a01b03166102d6565b34801561040857600080fd5b506103526104173660046120e2565b610fde565b34801561042857600080fd5b506007546101dc90610100900460ff1681565b34801561044757600080fd5b50610450611093565b6040516101e89190612143565b34801561046957600080fd5b5061020660065481565b34801561047f57600080fd5b50610206600a81565b610352610496366004611ece565b611118565b3480156104a757600080fd5b506101dc6104b6366004611e72565b611453565b3480156104c757600080fd5b506102066104d63660046120e2565b61145d565b3480156104e757600080fd5b506002546102d6906001600160a01b031681565b34801561050757600080fd5b506004546102d6906001600160a01b031681565b34801561052757600080fd5b50610352610536366004611e72565b61149d565b6000610545611de5565b6004805460405163f36dccf960e01b81526001600160a01b038681169382019390935291169063f36dccf9906024016101406040518083038186803b15801561058d57600080fd5b505afa1580156105a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c5919061203a565b9050806101200151156105dc5760019150506105e2565b60009150505b919050565b6000600460009054906101000a90046001600160a01b03166001600160a01b031663a0aead4d6040518163ffffffff1660e01b815260040160606040518083038186803b15801561063757600080fd5b505afa15801561064b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066f91906120fa565b5092915050565b600080610681611de5565b6004805460405163f36dccf960e01b81526001600160a01b038781169382019390935291169063f36dccf9906024016101406040518083038186803b1580156106c957600080fd5b505afa1580156106dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610701919061203a565b905080610120015115610722578060200151816040015192509250506107cc565b6004805460405163a8b5b8ed60e01b81526001600160a01b038781169382019390935291169063a8b5b8ed906024016101406040518083038186803b15801561076a57600080fd5b505afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a2919061203a565b9050806101200151156107c3578060200151816040015192509250506107cc565b60008092509250505b915091565b6107d9611de5565b6107e1611de5565b6004805460405163f36dccf960e01b81526001600160a01b038681169382019390935291169063f36dccf9906024016101406040518083038186803b15801561082957600080fd5b505afa15801561083d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610861919061203a565b9050806101200151156108755790506105e2565b6004805460405163a8b5b8ed60e01b81526001600160a01b038681169382019390935291169063a8b5b8ed906024016101406040518083038186803b1580156108bd57600080fd5b505afa1580156108d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f5919061203a565b9050806101200151156109095790506105e2565b6004805460405163f36dccf960e01b81526001600160a01b038681169382019390935291169063f36dccf9906024016101406040518083038186803b15801561095157600080fd5b505afa158015610965573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610989919061203a565b9150506105e2565b600354604051630b81bf9960e11b81526001600160a01b03858116600483015284811660248301526044820184905260009216906317037f329060640160206040518083038186803b1580156109e657600080fd5b505afa1580156109fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1e9190611fd8565b90505b9392505050565b60025460405163df73eb5160e01b8152600481018390526000916001600160a01b03169063df73eb519060240160206040518083038186803b158015610a6d57600080fd5b505afa158015610a81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa59190611fbe565b92915050565b6000600460009054906101000a90046001600160a01b03166001600160a01b031663a0aead4d6040518163ffffffff1660e01b815260040160606040518083038186803b158015610afb57600080fd5b505afa158015610b0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3391906120fa565b509092915050565b610b43611516565b610b4d6000611570565b565b6000610b59611de5565b6004805460405163f36dccf960e01b81526001600160a01b038681169382019390935291169063f36dccf9906024016101406040518083038186803b158015610ba157600080fd5b505afa158015610bb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd9919061203a565b905080610120015115610bf05760019150506105e2565b6004805460405163a8b5b8ed60e01b81526001600160a01b038681169382019390935291169063a8b5b8ed906024016101406040518083038186803b158015610c3857600080fd5b505afa158015610c4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c70919061203a565b905080610120015115610c875760019150506105e2565b60009150506105e2565b6000600460009054906101000a90046001600160a01b03166001600160a01b031663a0aead4d6040518163ffffffff1660e01b815260040160606040518083038186803b158015610ce157600080fd5b505afa158015610cf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2191906120fa565b610d21611516565b6001600160a01b03831615801590610d4157506001600160a01b03821615155b8015610d5557506001600160a01b03811615155b610d985760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206164647265737360881b60448201526064015b60405180910390fd5b600280546001600160a01b038481166001600160a01b03199283168117909355600380548783169084168117909155600480549286169290931682179092556007805460ff191690556040805192835260208301939093528183015290517f9f0eecb338db460766136d2e57743b5655a27a9c51ddc53f38ec1da401546ec19181900360600190a1505050565b610e2d611516565b6003546001600160a01b0316151580610e5057506002546001600160a01b031615155b80610e6557506004546001600160a01b031615155b610ea25760405162461bcd60e51b815260206004820152600e60248201526d1cdbd8dad95d081b9bdd081cd95d60921b6044820152606401610d8f565b6007805460ff19811660ff90911615179055565b610ebe611516565b60075460ff1615610ee15760405162461bcd60e51b8152600401610d8f906121ba565b6005546001600160a01b0382811691161415610f2d5760405162461bcd60e51b815260206004820152600b60248201526a185b1c9958591e481cd95d60aa1b6044820152606401610d8f565b6001600160a01b038116610f755760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964204164647265737360881b6044820152606401610d8f565b600554604080516001600160a01b03808516825290921660208301527f8ae7f019483f02a20195ce98e9905c37b4d7c17b49f012ef4a7b7d3ca04809b8910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b610fe6611516565b60075460ff16156110095760405162461bcd60e51b8152600401610d8f906121ba565b600a8111156110525760405162461bcd60e51b815260206004820152601560248201527456616c75652061626f7665206d61782076616c756560581b6044820152606401610d8f565b60065460408051918252602082018390527fed28c14db89870da08d76b69e3f96d95cbb779778f62a9ea4d4d41dc082d088a910160405180910390a1600655565b6002546040805162608fd560e41b815290516060926001600160a01b031691630608fd50916004808301926000929190829003018186803b1580156110d757600080fd5b505afa1580156110eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111139190810190611f17565b905090565b60075460ff161561113b5760405162461bcd60e51b8152600401610d8f906121ba565b61114484610b4f565b6111805760405162461bcd60e51b815260206004820152600d60248201526c125b9d985b1a5908105cdcd95d609a1b6044820152606401610d8f565b6000806000611191878733886115c2565b9250925092508280156111a45750600082115b6111e45760405162461bcd60e51b8152602060048201526011602482015270496e737566696369656e742066756e647360781b6044820152606401610d8f565b6111ee8288611890565b915060006111fb8861053b565b15611350576001600160a01b0388166112a5576004546001600160a01b031663b5e8c01461122985856122dc565b898b878a6040518663ffffffff1660e01b815260040161124c9493929190612284565b6020604051808303818588803b15801561126557600080fd5b505af1158015611279573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061129e9190611fd8565b905061134b565b6004546112bf906001600160a01b038a811691168561198c565b60048054604051632d7a300560e21b81526001600160a01b039091169163b5e8c0149185916112f6918c918e918a918d9101612284565b6020604051808303818588803b15801561130f57600080fd5b505af1158015611323573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906113489190611fd8565b90505b6113f6565b60045461136a906001600160a01b038a811691168561198c565b60048054604051630bf7be2160e41b81526001600160a01b039091169163bf7be2109185916113a1918c918e918a918d9101612284565b6020604051808303818588803b1580156113ba57600080fd5b505af11580156113ce573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906113f39190611fd8565b90505b604080518281526020810189905290810184905233906001600160a01b0387811691908b16907f32a8648ca22f84caa583d7622bbdd854b46f886f98651514e2d331e455e4f0659060600160405180910390a45050505050505050565b6000610bf0611de5565b60006006546000148061146e575081155b1561147b575060006105e2565b6127108260065461148c9190612314565b61149691906122f4565b90506105e2565b6114a5611516565b6001600160a01b03811661150a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610d8f565b61151381611570565b50565b6001546001600160a01b03163314610b4d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610d8f565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600354604051630b81bf9960e11b81526001600160a01b03848116600483015286811660248301526044820186905260009283928392839216906317037f329060640160206040518083038186803b15801561161d57600080fd5b505afa158015611631573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116559190611fd8565b90506001600160a01b0388166116b05761166f81866122dc565b341015801561167e5750600034115b1561169f57600061168f8234612333565b6001955093509091506118869050565b600080600093509350935050611886565b87856001600160a01b03821663dd62ed3e336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260440160206040518083038186803b15801561170757600080fd5b505afa15801561171b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173f9190611fd8565b1015801561174d5750813410155b1561187b576040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b15801561179457600080fd5b505afa1580156117a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cc9190611fd8565b90506117e36001600160a01b03831633308a611ae8565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b15801561182557600080fd5b505afa158015611839573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185d9190611fd8565b9050600161186b8383612333565b8596509650965050505050611886565b506000935083925090505b9450945094915050565b600080600260009054906101000a90046001600160a01b03166001600160a01b0316638375bb396040518163ffffffff1660e01b815260040160206040518083038186803b1580156118e157600080fd5b505afa1580156118f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119199190611fd8565b9050600061271061192a8387612314565b61193491906122f4565b90506000612710600654838861194a9190612333565b6119549190612314565b61195e91906122f4565b600554909150611978906001600160a01b03168683611b26565b6119828187612333565b9695505050505050565b801580611a155750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156119db57600080fd5b505afa1580156119ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a139190611fd8565b155b611a805760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610d8f565b6040516001600160a01b038316602482015260448101829052611ae390849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611bcf565b505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611b209085906323b872dd60e01b90608401611aac565b50505050565b6001600160a01b038316611b705760405162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a59081c9958da5c1a595b9d607a1b6044820152606401610d8f565b6001600160a01b038216611bba576040516001600160a01b0384169082156108fc029083906000818181858888f19350505050158015611bb4573d6000803e3d6000fd5b50611ae3565b81611b206001600160a01b0382168584611ca1565b6000611c24826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611cd19092919063ffffffff16565b805190915015611ae35780806020019051810190611c429190611fbe565b611ae35760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610d8f565b6040516001600160a01b038316602482015260448101829052611ae390849063a9059cbb60e01b90606401611aac565b6060610a1e8484600085856001600160a01b0385163b611d335760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610d8f565b600080866001600160a01b03168587604051611d4f9190612127565b60006040518083038185875af1925050503d8060008114611d8c576040519150601f19603f3d011682016040523d82523d6000602084013e611d91565b606091505b5091509150611da1828286611dac565b979650505050505050565b60608315611dbb575081610a21565b825115611dcb5782518084602001fd5b8160405162461bcd60e51b8152600401610d8f9190612187565b60405180610140016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000151581525090565b80516105e2816123a2565b805180151581146105e257600080fd5b600060208284031215611e83578081fd5b8135610a21816123a2565b600080600060608486031215611ea2578182fd5b8335611ead816123a2565b92506020840135611ebd816123a2565b929592945050506040919091013590565b60008060008060808587031215611ee3578081fd5b8435611eee816123a2565b935060208501359250604085013591506060850135611f0c816123a2565b939692955090935050565b60006020808385031215611f29578182fd5b825167ffffffffffffffff80821115611f40578384fd5b818501915085601f830112611f53578384fd5b815181811115611f6557611f6561238c565b8381029150611f758483016122ab565b8181528481019084860184860187018a1015611f8f578788fd5b8795505b83861015611fb1578051835260019590950194918601918601611f93565b5098975050505050505050565b600060208284031215611fcf578081fd5b610a2182611e62565b600060208284031215611fe9578081fd5b5051919050565b600080600060608486031215612004578283fd5b833561200f816123a2565b9250602084013561201f816123a2565b9150604084013561202f816123a2565b809150509250925092565b600061014080838503121561204d578182fd5b612056816122ab565b905061206183611e57565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015261209760a08401611e62565b60a08201526120a860c08401611e57565b60c08201526120b960e08401611e57565b60e082015261010083810151908201526101206120d7818501611e62565b908201529392505050565b6000602082840312156120f3578081fd5b5035919050565b60008060006060848603121561210e578283fd5b8351925060208401519150604084015190509250925092565b6000825161213981846020870161234a565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b8181101561217b5783518352928401929184019160010161215f565b50909695505050505050565b60006020825282518060208401526121a681604085016020870161234a565b601f01601f19169190910160400192915050565b6020808252600d908201526c14dbd8dad95d081c185d5cd959609a1b604082015260600190565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015161222e60a084018215159052565b5060c083015161224960c08401826001600160a01b03169052565b5060e083015161226460e08401826001600160a01b03169052565b506101008381015190830152610120928301511515929091019190915290565b9384526001600160a01b039283166020850152604084019190915216606082015260800190565b604051601f8201601f1916810167ffffffffffffffff811182821017156122d4576122d461238c565b604052919050565b600082198211156122ef576122ef612376565b500190565b60008261230f57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561232e5761232e612376565b500290565b60008282101561234557612345612376565b500390565b60005b8381101561236557818101518382015260200161234d565b83811115611b205750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461151357600080fdfea2646970667358221220cd137e296fe751ede1a5ba895e135b395eaf3e07aa98379c1bb2c6fc19dc90f364736f6c63430008020033";

type BridgeSocketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeSocketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeSocket__factory extends ContractFactory {
  constructor(...args: BridgeSocketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _settings: PromiseOrValue<string>,
    _feeController: PromiseOrValue<string>,
    _bridge: PromiseOrValue<string>,
    _feeRemittance: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BridgeSocket> {
    return super.deploy(
      _settings,
      _feeController,
      _bridge,
      _feeRemittance,
      overrides || {}
    ) as Promise<BridgeSocket>;
  }
  override getDeployTransaction(
    _settings: PromiseOrValue<string>,
    _feeController: PromiseOrValue<string>,
    _bridge: PromiseOrValue<string>,
    _feeRemittance: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _settings,
      _feeController,
      _bridge,
      _feeRemittance,
      overrides || {}
    );
  }
  override attach(address: string): BridgeSocket {
    return super.attach(address) as BridgeSocket;
  }
  override connect(signer: Signer): BridgeSocket__factory {
    return super.connect(signer) as BridgeSocket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeSocketInterface {
    return new utils.Interface(_abi) as BridgeSocketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeSocket {
    return new Contract(address, _abi, signerOrProvider) as BridgeSocket;
  }
}
