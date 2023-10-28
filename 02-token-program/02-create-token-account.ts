import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey('Agd2hRTJmoQkS4y6QXXfr9RV2nWrPWkKWJ2EJ83Zczej')
const decoded = base58.decode('4KdWD5zRhyknoa4jxtkTsDfqNpFW5LstnBqGE6F16RidWf9qrMb3v1roxQxkybGBr8wytuuz6wUMekmGALtQxkdm')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = 'TDBMQLp7jdiuNS3rqXgyHrEYCtFbem8349vWDq3ftW2'

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();