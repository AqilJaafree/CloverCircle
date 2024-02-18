export const createNFT = `
import BasicNFT from 0x6dd955c89410f30f 

transaction (post:String) {

  prepare(acct: AuthAccount) {
    acct.save(<-BasicNFT.createNFT(post: post), to : /storage/BasicNFTPath)
    acct.link<&BasicNFT.NFT{BasicNFT.NFTPublic}>(/public/BasicNFTPath, target: /storage/BasicNFTPath)
  }

  execute {
    log("NFT Created!")
  }
}
`;