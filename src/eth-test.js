// set up
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/8f14e867632c4318a350a99a52c57ee8'))

// create eth account
var aliceKeys = web3.eth.accounts.create();
console.log(aliceKeys);
var bobKeys = web3.eth.accounts.create();
console.log(bobKeys);

// get balance
var getBalance = function(addr) {
  web3.eth.getBalance(addr)
    .then(console.log);
};
getBalance(aliceKeys.address);

// create transaction and sign to transation
var signTransaction = function() {
  var tx = {
    from: aliceKeys.addr,
    gasPrice: "200000000",
    gas: "420000",
    to: bobKeys.addr,
    value: "100000",
    data: ""
  }

  web3.eth.accounts.signTransaction(
    tx, aliceKeys.privateKey
  ).then(function(signedTx) {
    console.log(signedTx.rawTransaction);

    // submit transaction
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      .then(console.log)
      .catch(console.log);
    });
};
signTransaction()
