import { ethers } from 'ethers'
import nftMinter from './NFTMinter.json'

const NFTAdress = '0x21e38a598950A893CD1cdeD2a44DA559C2d8f4fc'

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
