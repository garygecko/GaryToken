import { ethers } from "hardhat";

async function main() {
  // const Gary = await ethers.getContractFactory("GaryToken");
  // const gary = await Gary.deploy();

  const gary = await ethers.getContractAt("GaryToken", "0x62a13eA6b285fd6C3261B82797669E78146BB0b1");
  // await gary.transferOwnership("0xF7F9Ff8b6c2E0E739fd9807b1f76f31789b86e57")

  // console.log(gary.address);
  const owner = await gary.owner();
  console.log(owner);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x62a13eA6b285fd6C3261B82797669E78146BB0b1