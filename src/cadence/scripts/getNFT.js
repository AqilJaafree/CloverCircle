export const getNFT = `
import BasicNFT from 0x6dd955c89410f30f

pub fun main (account : Address) :AnyStruct {
  let publicReference = getAccount(account).getCapability(/public/BasicNFTPath)
                                           .borrow<&BasicNFT.NFT{BasicNFT.NFTPublic}>()
                                           ?? panic("No nft reference there")

  return [publicReference.getID(), publicReference.getPOST()]
}
`;