/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IOVMCrossDomainMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOVMCrossDomainMessenger__factory>;
    getContractFactory(
      name: "IOVML1ERC20Bridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOVML1ERC20Bridge__factory>;
    getContractFactory(
      name: "IOVML1StandardBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOVML1StandardBridge__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Auth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Auth__factory>;
    getContractFactory(
      name: "Authority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authority__factory>;
    getContractFactory(
      name: "EchidnaL1NovaExecutionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EchidnaL1NovaExecutionManager__factory>;
    getContractFactory(
      name: "EchidnaL2NovaRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EchidnaL2NovaRegistry__factory>;
    getContractFactory(
      name: "Hevm",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hevm__factory>;
    getContractFactory(
      name: "CrossDomainEnabled",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossDomainEnabled__factory>;
    getContractFactory(
      name: "L1NovaApprovalEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1NovaApprovalEscrow__factory>;
    getContractFactory(
      name: "L1NovaExecutionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1NovaExecutionManager__factory>;
    getContractFactory(
      name: "L2NovaRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2NovaRegistry__factory>;
    getContractFactory(
      name: "MockAuthority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAuthority__factory>;
    getContractFactory(
      name: "MockCrossDomainMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCrossDomainMessenger__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "BadReturnValueERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BadReturnValueERC20__factory>;
    getContractFactory(
      name: "NoReturnValueERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NoReturnValueERC20__factory>;
    getContractFactory(
      name: "ReturnFalseERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReturnFalseERC20__factory>;
    getContractFactory(
      name: "EvilExternalContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EvilExternalContract__factory>;
    getContractFactory(
      name: "MockStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockStrategy__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
