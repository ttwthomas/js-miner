const BTCMiner = require('bitcoin-miner');

self.addEventListener('message', function(message) {
    console.log("started worker",message);
    block = message.data.block;
    nonce = message.data.startNonce;
    const miner = new BTCMiner(block);
    let hash;
    let found = false;

    while (!found) { 
        hash = miner.getHash(nonce);
        if (nonce%50 == 0 ){
            self.postMessage(hash.toString('hex'));
        }
        found = miner.checkHash(hash);
        if (found) {
            miner.verifyNonce(block, nonce);
            console.log("found!!!!!!!!");
            self.close();

        }
        nonce++;
    }
    self.close();
}, false);