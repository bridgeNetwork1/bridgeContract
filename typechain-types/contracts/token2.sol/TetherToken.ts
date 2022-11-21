/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TetherTokenInterface extends utils.Interface {
  functions: {
    "name()": FunctionFragment;
    "deprecate(address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "deprecated()": FunctionFragment;
    "addBlackList(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "upgradedAddress()": FunctionFragment;
    "balances(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "maximumFee()": FunctionFragment;
    "_totalSupply()": FunctionFragment;
    "unpause()": FunctionFragment;
    "getBlackListStatus(address)": FunctionFragment;
    "allowed(address,address)": FunctionFragment;
    "paused()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "symbol()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "setParams(uint256,uint256)": FunctionFragment;
    "issue(uint256)": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "basisPointsRate()": FunctionFragment;
    "isBlackListed(address)": FunctionFragment;
    "removeBlackList(address)": FunctionFragment;
    "MAX_UINT()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "destroyBlackFunds(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "name"
      | "deprecate"
      | "approve"
      | "deprecated"
      | "addBlackList"
      | "totalSupply"
      | "transferFrom"
      | "upgradedAddress"
      | "balances"
      | "decimals"
      | "maximumFee"
      | "_totalSupply"
      | "unpause"
      | "getBlackListStatus"
      | "allowed"
      | "paused"
      | "balanceOf"
      | "pause"
      | "getOwner"
      | "owner"
      | "symbol"
      | "transfer"
      | "setParams"
      | "issue"
      | "redeem"
      | "allowance"
      | "basisPointsRate"
      | "isBlackListed"
      | "removeBlackList"
      | "MAX_UINT"
      | "transferOwnership"
      | "destroyBlackFunds"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deprecate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deprecated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addBlackList",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradedAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maximumFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getBlackListStatus",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setParams",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "issue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "basisPointsRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isBlackListed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBlackList",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyBlackFunds",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deprecate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deprecated", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maximumFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBlackListStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setParams", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "basisPointsRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlackListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBlackList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyBlackFunds",
    data: BytesLike
  ): Result;

  events: {
    "Issue(uint256)": EventFragment;
    "Redeem(uint256)": EventFragment;
    "Deprecate(address)": EventFragment;
    "Params(uint256,uint256)": EventFragment;
    "DestroyedBlackFunds(address,uint256)": EventFragment;
    "AddedBlackList(address)": EventFragment;
    "RemovedBlackList(address)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Pause()": EventFragment;
    "Unpause()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Issue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deprecate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Params"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DestroyedBlackFunds"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddedBlackList"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedBlackList"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pause"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpause"): EventFragment;
}

export interface IssueEventObject {
  amount: BigNumber;
}
export type IssueEvent = TypedEvent<[BigNumber], IssueEventObject>;

export type IssueEventFilter = TypedEventFilter<IssueEvent>;

export interface RedeemEventObject {
  amount: BigNumber;
}
export type RedeemEvent = TypedEvent<[BigNumber], RedeemEventObject>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export interface DeprecateEventObject {
  newAddress: string;
}
export type DeprecateEvent = TypedEvent<[string], DeprecateEventObject>;

export type DeprecateEventFilter = TypedEventFilter<DeprecateEvent>;

export interface ParamsEventObject {
  feeBasisPoints: BigNumber;
  maxFee: BigNumber;
}
export type ParamsEvent = TypedEvent<[BigNumber, BigNumber], ParamsEventObject>;

export type ParamsEventFilter = TypedEventFilter<ParamsEvent>;

export interface DestroyedBlackFundsEventObject {
  _blackListedUser: string;
  _balance: BigNumber;
}
export type DestroyedBlackFundsEvent = TypedEvent<
  [string, BigNumber],
  DestroyedBlackFundsEventObject
>;

export type DestroyedBlackFundsEventFilter =
  TypedEventFilter<DestroyedBlackFundsEvent>;

export interface AddedBlackListEventObject {
  _user: string;
}
export type AddedBlackListEvent = TypedEvent<
  [string],
  AddedBlackListEventObject
>;

export type AddedBlackListEventFilter = TypedEventFilter<AddedBlackListEvent>;

export interface RemovedBlackListEventObject {
  _user: string;
}
export type RemovedBlackListEvent = TypedEvent<
  [string],
  RemovedBlackListEventObject
>;

export type RemovedBlackListEventFilter =
  TypedEventFilter<RemovedBlackListEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface PauseEventObject {}
export type PauseEvent = TypedEvent<[], PauseEventObject>;

export type PauseEventFilter = TypedEventFilter<PauseEvent>;

export interface UnpauseEventObject {}
export type UnpauseEvent = TypedEvent<[], UnpauseEventObject>;

export type UnpauseEventFilter = TypedEventFilter<UnpauseEvent>;

export interface TetherToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TetherTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    name(overrides?: CallOverrides): Promise<[string]>;

    deprecate(
      _upgradedAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approve(
      _spender: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deprecated(overrides?: CallOverrides): Promise<[boolean]>;

    addBlackList(
      _evilUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradedAddress(overrides?: CallOverrides): Promise<[string]>;

    balances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    maximumFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    _totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBlackListStatus(
      _maker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    allowed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    balanceOf(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    transfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setParams(
      newBasisPoints: PromiseOrValue<BigNumberish>,
      newMaxFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issue(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeem(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowance(
      _owner: PromiseOrValue<string>,
      _spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { remaining: BigNumber }>;

    basisPointsRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    isBlackListed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeBlackList(
      _clearedUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    destroyBlackFunds(
      _blackListedUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  name(overrides?: CallOverrides): Promise<string>;

  deprecate(
    _upgradedAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approve(
    _spender: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deprecated(overrides?: CallOverrides): Promise<boolean>;

  addBlackList(
    _evilUser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradedAddress(overrides?: CallOverrides): Promise<string>;

  balances(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  maximumFee(overrides?: CallOverrides): Promise<BigNumber>;

  _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBlackListStatus(
    _maker: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  allowed(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  balanceOf(
    who: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  transfer(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setParams(
    newBasisPoints: PromiseOrValue<BigNumberish>,
    newMaxFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issue(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeem(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowance(
    _owner: PromiseOrValue<string>,
    _spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  basisPointsRate(overrides?: CallOverrides): Promise<BigNumber>;

  isBlackListed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeBlackList(
    _clearedUser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  destroyBlackFunds(
    _blackListedUser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    name(overrides?: CallOverrides): Promise<string>;

    deprecate(
      _upgradedAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    approve(
      _spender: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deprecated(overrides?: CallOverrides): Promise<boolean>;

    addBlackList(
      _evilUser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradedAddress(overrides?: CallOverrides): Promise<string>;

    balances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    maximumFee(overrides?: CallOverrides): Promise<BigNumber>;

    _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;

    getBlackListStatus(
      _maker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    allowed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    balanceOf(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setParams(
      newBasisPoints: PromiseOrValue<BigNumberish>,
      newMaxFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    issue(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    allowance(
      _owner: PromiseOrValue<string>,
      _spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    basisPointsRate(overrides?: CallOverrides): Promise<BigNumber>;

    isBlackListed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeBlackList(
      _clearedUser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    destroyBlackFunds(
      _blackListedUser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Issue(uint256)"(amount?: null): IssueEventFilter;
    Issue(amount?: null): IssueEventFilter;

    "Redeem(uint256)"(amount?: null): RedeemEventFilter;
    Redeem(amount?: null): RedeemEventFilter;

    "Deprecate(address)"(newAddress?: null): DeprecateEventFilter;
    Deprecate(newAddress?: null): DeprecateEventFilter;

    "Params(uint256,uint256)"(
      feeBasisPoints?: null,
      maxFee?: null
    ): ParamsEventFilter;
    Params(feeBasisPoints?: null, maxFee?: null): ParamsEventFilter;

    "DestroyedBlackFunds(address,uint256)"(
      _blackListedUser?: null,
      _balance?: null
    ): DestroyedBlackFundsEventFilter;
    DestroyedBlackFunds(
      _blackListedUser?: null,
      _balance?: null
    ): DestroyedBlackFundsEventFilter;

    "AddedBlackList(address)"(_user?: null): AddedBlackListEventFilter;
    AddedBlackList(_user?: null): AddedBlackListEventFilter;

    "RemovedBlackList(address)"(_user?: null): RemovedBlackListEventFilter;
    RemovedBlackList(_user?: null): RemovedBlackListEventFilter;

    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;

    "Pause()"(): PauseEventFilter;
    Pause(): PauseEventFilter;

    "Unpause()"(): UnpauseEventFilter;
    Unpause(): UnpauseEventFilter;
  };

  estimateGas: {
    name(overrides?: CallOverrides): Promise<BigNumber>;

    deprecate(
      _upgradedAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approve(
      _spender: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deprecated(overrides?: CallOverrides): Promise<BigNumber>;

    addBlackList(
      _evilUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradedAddress(overrides?: CallOverrides): Promise<BigNumber>;

    balances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    maximumFee(overrides?: CallOverrides): Promise<BigNumber>;

    _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBlackListStatus(
      _maker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setParams(
      newBasisPoints: PromiseOrValue<BigNumberish>,
      newMaxFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    issue(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeem(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowance(
      _owner: PromiseOrValue<string>,
      _spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    basisPointsRate(overrides?: CallOverrides): Promise<BigNumber>;

    isBlackListed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeBlackList(
      _clearedUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    destroyBlackFunds(
      _blackListedUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deprecate(
      _upgradedAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      _spender: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deprecated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addBlackList(
      _evilUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradedAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balances(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maximumFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBlackListStatus(
      _maker: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      who: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setParams(
      newBasisPoints: PromiseOrValue<BigNumberish>,
      newMaxFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issue(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowance(
      _owner: PromiseOrValue<string>,
      _spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    basisPointsRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isBlackListed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeBlackList(
      _clearedUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    destroyBlackFunds(
      _blackListedUser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
