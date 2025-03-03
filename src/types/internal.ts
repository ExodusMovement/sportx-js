import { BigNumber } from "@exodus/ethersproject-bignumber";
import { Contract } from "@exodus/ethersproject-contracts";

export interface IContractOrder {
  marketHash: string;
  maker: string;
  totalBetSize: BigNumber;
  percentageOdds: BigNumber;
  expiry: BigNumber;
  baseToken: string;
  salt: BigNumber;
  executor: string;
  isMakerBettingOutcomeOne: boolean;
}

export interface IPermit {
  holder: string;
  spender: string;
  nonce: number;
  expiry: number;
  allowed: boolean;
}

export interface IApproveSpenderPayload {
  owner: string;
  spender: string;
  tokenAddress: string;
  amount: string;
  signature: string;
}

export interface IFillDetailsMetadata {
  action: string;
  market: string;
  betting: string;
  stake: string;
  odds: string;
  returning: string;
}

export interface IFillDetails extends IFillDetailsMetadata {
  fills: IFillObject;
}

export interface IFillObject {
  orders: IContractOrder[];
  makerSigs: string[];
  takerAmounts: BigNumber[];
  fillSalt: BigNumber;
  beneficiary: string;
}

export interface ICancelDetails {
  message: string;
  orders: string[];
}

export interface IBaseTokenWrappers {
  [address: string]: Contract;
}
