import React, { useState } from 'react';
import { createNFT } from '../../cadence/transactions/createNFT.js';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';
import * as fcl from "@onflow/fcl";
import { TotalSupply } from '../../cadence/scripts/TotalSupply.js';
import * as t from "@onflow/types"; // Import the necessary types

export default function AddPost() {
const [postContent, setPostContent] = useState('');
const [totalsupply, setTotalSupply] = useState();
const logIn =  () => {
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);
    GetTotalSupply()
  }
const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };
const GetTotalSupply = async () =>{
    const result = await fcl.send([
      fcl.script(TotalSupply)
    ]).then(fcl.decode)

    setTotalSupply(result)
    console.log(result)
  }

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch the total supply before sending the transaction
      await GetTotalSupply();

      // Use the fetched total supply as an argument for createNFT
      const result = await fcl.send([
        fcl.transaction(createNFT),
        fcl.args([
          fcl.arg(postContent, t.String), // Use t.String to specify the type
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999),
      ]).then(fcl.decode);

      // Log the transaction result
      console.log(result);

      // Reset the input field after posting
      setPostContent('');
    } catch (error) {
      console.error('Error posting NFT:', error);
    }
  };
  

  return (
    <form className='postForm' onSubmit={handlePostSubmit}>
        <div className="user form-top">
            <input type="text" placeholder="What's on your mind?"  onChange={handleInputChange} />
            <button type='submit' className='btn btn-primary'>Post</button>
        </div>
        <div className="post-categories">
            <label htmlFor="file">
                <input type="file" />
                    <span><FontAwesomeIcon icon={faImage} /></span>
            </label>
            <label htmlFor="file">
                <input type="file" />
                    <span><FontAwesomeIcon icon={faVideo} /></span>
            </label>
            <span><FontAwesomeIcon icon={faTags} /></span>
            <span><FontAwesomeIcon icon={faSmile} /></span>
        </div>
    </form>
  )
}
