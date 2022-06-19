const { exec } = require("child_process");
const fs = require("fs");
const generatedPath = "src/utils/Generated/contract.json";
const nftAPIPath = "src/utils/Generated/NFTMinter.json";

const deploymentToken = exec(
  "npx hardhat run scripts/deployNTFMinter.js --network rinkeby"
);

deploymentToken.stdout.on("data", function (data) {
  const parseToken = data.split(" ");
  const contractAddress = parseToken[parseToken.length - 1]; // get deployed token, we can call contract Address
  if (fs.existsSync(generatedPath)) {
    // check contract address already exist
    console.log("contact address already exist ");
    fs.unlinkSync(generatedPath);
  }

  if (fs.existsSync(nftAPIPath)) {
    // check NFT API file exist
    console.log("NFT Contract Files already exist");
    fs.unlinkSync(nftAPIPath);
  }

  fs.appendFileSync(
    // create contract address from scratch
    generatedPath,
    `{
    "contractAddress": "${contractAddress.trim()}"
    }`
  );

  fs.copyFileSync(
    // copy NFT API file
    "artifacts/contracts/NFTMinter.sol/NFTMinter.json",
    nftAPIPath
  );
});
