import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey('Agd2hRTJmoQkS4y6QXXfr9RV2nWrPWkKWJ2EJ83Zczej')
const base58DecodedPK = base58.decode('4KdWD5zRhyknoa4jxtkTsDfqNpFW5LstnBqGE6F16RidWf9qrMb3v1roxQxkybGBr8wytuuz6wUMekmGALtQxkdm')
const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
const tokenMint = new Web3.PublicKey('TDBMQLp7jdiuNS3rqXgyHrEYCtFbem8349vWDq3ftW2')
const tokenAccount = new Web3.PublicKey('J6RLhB7JK3tsic8GbmUfPddL6w78qBFWBLvoo9HoAbwp')

async function main(){
    const mintInfo = await token.getMint(
        connection,
        tokenMint
    )
    console.log("Mint Supply: ", mintInfo.supply);
    console.log("Mint Authority: ", mintInfo.mintAuthority);
    console.log("Freeze Authority: ", mintInfo.freezeAuthority);

    // const mintToken = await token.mintTo(
    //     connection,
    //     signer,
    //     new Web3.PublicKey(tokenMint), //mint 
    //     new Web3.PublicKey(tokenAccount), // token account
    //     publickey, //authority
    //     100000000000, //amount
    // )
    // console.log('Minted Token/s: ', mintToken)
}

main();