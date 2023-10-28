import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('4KdWD5zRhyknoa4jxtkTsDfqNpFW5LstnBqGE6F16RidWf9qrMb3v1roxQxkybGBr8wytuuz6wUMekmGALtQxkdm')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('Agd2hRTJmoQkS4y6QXXfr9RV2nWrPWkKWJ2EJ83Zczej')
    const publicKeyTo = new Web3.PublicKey('DPTmfmFH6nnzsae5Ny964rNDAyTsTty4URKzFhJRnoWB')

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1000000000,
    })

    const transaction = new Web3.Transaction()
    transaction.add(instruction)

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair])

    console.log('txHash', txSignature)
}

main()