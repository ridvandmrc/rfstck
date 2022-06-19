import { ethers } from 'ethers'
import nftMinter from './Generated/NFTMinter.json'
import contractAddress from './Generated/contract.json'

const NFTAdress = contractAddress.contractAddress

export async function mainMint(url: string) {
  if ((window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(NFTAdress, nftMinter.abi, signer)

    try {
      const response = await contract.mint(url)
      console.log('response: ', response)
    } catch (err) {
      console.log('error', err)
    }
  }
}
