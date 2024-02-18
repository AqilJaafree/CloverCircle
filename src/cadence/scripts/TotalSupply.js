export const TotalSupply = `
import BasicNFT from 0x6dd955c89410f30f 

pub fun main(): UInt64 {
    return BasicNFT.totalSupply
} 
`;