import './feeds.css';
import Feed from './Feed';
import { getNFT } from '../../cadence/scripts/getNFT.js';
import React, { useState, useEffect } from 'react';
import * as fcl from "@onflow/fcl";

export default function Feeds() {
  const [POST, setPOST] = useState('');

  useEffect(() => {
    // Fetch NFTs when the component mounts
    GetMyNFT();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const GetMyNFT = async () => {
    try {
      const result = await fcl
      .send([
      fcl.script(getNFT),
      cl.args([fcl.arg(fcl.withPrefix(fcl.currentUser().addr), fcl.t.Address)]),
      ])
      .then(fcl.decode);


      setPOST(result[1]);
      console.log(result[1]);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };

  return (
    <div className='feeds'>
      <p>{POST}</p>
      {/* Uncomment the following lines if you want to map over HomeFeedData and render Feed components */}
      {/* {HomeFeedData.map(fed => (
        <Feed fed={fed} key={fed.key} />
      ))} */}
    </div>
  );
}
