import * as Web3 from '@solana/web3.js'

async function main() {
    const publicKey = new Web3.PublicKey('Agd2hRTJmoQkS4y6QXXfr9RV2nWrPWkKWJ2EJ83Zczej')
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey)
    console.log('balance ', balance)

}

main()