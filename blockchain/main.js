const SHA256 = require('crypto-js/sha256');

class Block {
    //构造区块
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }

    //计算hash
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/012017", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for( let i=1; i<this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if( currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

let savejeeCoin = new Blockchain();
savejeeCoin.addBlock(new Block(1, "10/07/2017", { amount: 4 }));
savejeeCoin.addBlock(new Block(2, "12/07/2017", { amount: 10 }));

console.log('is blockchain vaild ? '+ savejeeCoin.isChainValid());
savejeeCoin.chain[1].data={amount:1000};
savejeeCoin.chain[1].hash = savejeeCoin.chain[1].calculateHash();

console.log('is blockchain vaild ? '+ savejeeCoin.isChainValid());
//console.log(JSON.stringify(savejeeCoin, null, 4));
