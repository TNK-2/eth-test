var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://ropsten.infura.io/45304a1afa6a4de4bd7e9df0f1d7dbb9'))

var createAccounts = function () {
  var aliceKeys = web3.eth.accounts.create();
  console.log(aliceKeys);
  var bobKeys = web3.eth.accounts.create();
  console.log(bobKeys);
}

createAccounts();