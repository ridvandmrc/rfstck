const hre = require("hardhat");

async function main() {

  const TestNft = await hre.ethers.getContractFactory("TestNFT");
  const testNft = await TestNft.deploy();

  await testNft.deployed();

  console.log("TestNft deployed to:", testNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
