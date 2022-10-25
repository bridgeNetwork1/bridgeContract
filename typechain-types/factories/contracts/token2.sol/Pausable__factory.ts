/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Pausable,
  PausableInterface,
} from "../../../contracts/token2.sol/Pausable";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Pause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpause",
    type: "event",
  },
];

const _bytecode =
  "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506104058061006d6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633f4ba83a146100695780635c975abb1461007e5780638456cb59146100ab5780638da5cb5b146100c0578063f2fde38b1461011557600080fd5b341561007457600080fd5b61007c61014e565b005b341561008957600080fd5b61009161020c565b604051808215151515815260200191505060405180910390f35b34156100b657600080fd5b6100be61021f565b005b34156100cb57600080fd5b6100d36102df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012057600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610304565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101a957600080fd5b600060149054906101000a900460ff1615156101c457600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561027a57600080fd5b600060149054906101000a900460ff1615151561029657600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561035f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415156103d657806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505600a165627a7a7230582074cd02e5bcc6340457f41f37a7241cc64142afe428a5b895de1f4a069adca66b0029";

type PausableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pausable__factory extends ContractFactory {
  constructor(...args: PausableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Pausable> {
    return super.deploy(overrides || {}) as Promise<Pausable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Pausable {
    return super.attach(address) as Pausable;
  }
  override connect(signer: Signer): Pausable__factory {
    return super.connect(signer) as Pausable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableInterface {
    return new utils.Interface(_abi) as PausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Pausable {
    return new Contract(address, _abi, signerOrProvider) as Pausable;
  }
}
