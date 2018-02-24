# 以太坊 
```


```

# 区块链开发记录

```
➜  research cd heidsoft-smart-contract
➜  heidsoft-smart-contract git:(master) truffle init
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Compile:        truffle compile
  Migrate:        truffle migrate
  Test contracts: truffle test
➜  heidsoft-smart-contract git:(master) ✗ ls
contracts         test              truffle.js
migrations        truffle-config.js
➜  heidsoft-smart-contract git:(master) ✗ cd contracts
➜  contracts git:(master) ✗ ls
Migrations.sol
➜  contracts git:(master) ✗ touch Store.sol
➜  contracts git:(master) ✗ cat Migrations.sol


pragma solidity ^0.4.17;
pragma solidity ^0.4.17;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _;
  }



var SimpleStorage = artifacts.require("SimpleStorage");
  function Migrations() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
➜  contracts git:(master) ✗ vim Store.sol
➜  contracts git:(master) ✗ cd .
➜  contracts git:(master) ✗ cd ..
➜  heidsoft-smart-contract git:(master) ✗ ls
contracts         test              truffle.js
migrations        truffle-config.js
➜  heidsoft-smart-contract git:(master) ✗ cd migrations
➜  migrations git:(master) ✗ ls
1_initial_migration.js
➜  migrations git:(master) ✗ touch 2_deploy_contracts.js
➜  migrations git:(master) ✗ vim 2_deploy_contracts.js
➜  migrations git:(master) ✗ cd ..
➜  heidsoft-smart-contract git:(master) ✗ truffle compile
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/Store.sol...
Writing artifacts to ./build/contracts

➜  heidsoft-smart-contract git:(master) ✗ truffle develop
Truffle Develop started at http://localhost:9545/

Accounts:
(0) 0x627306090abab3a6e1400e9345bc60c78a8bef57
(1) 0xf17f52151ebef6c7334fad080c5704d77216b732
(2) 0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef
(3) 0x821aea9a577a9b44299b9c15c88cf3087f3b5544
(4) 0x0d1d4e623d10f9fba5db95830f7d3839406c6af2
(5) 0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e
(6) 0x2191ef87e392377ec08e7c08eb105ef5448eced5
(7) 0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5
(8) 0x6330a553fc93768f612722bb8c2ec78ac90b3bbc
(9) 0x5aeda56215b167893e80b4fe645ba6d5bab767de

Private Keys:
(0) c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3
(1) ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f
(2) 0dbbe8e4ae425a6d2687f1a7e3ba17bc98c673636790f1b8ad91193c05875ef1
(3) c88b703fb08cbea894b6aeff5a544fb92e78a18e19814cd85da83b71f772aa6c
(4) 388c684f0ba1ef5017716adb5d21a053ea8e90277d0868337519f97bede61418
(5) 659cbb0e2411a44db63778987b1e22153c086a95eb6b18bdf89de078917abc63
(6) 82d052c865f5763aad42add438569276c00d3d88a2d062d36b2bae914d58b8c8
(7) aa3680d5d48a8283413f7a108367c7299ca73f553735860a87b08f39395618b7
(8) 0f62d96d6675f32685bbdb8ac13cda7c23436f63efbb9d07700d8669ff12b7c4
(9) 8d5366123cb560bb606379f90a0bfd4769eecc0557f1b362dcae9012b548b1e5

Mnemonic: candy maple cake sugar pudding cream honey rich smooth crumble sweet treat

truffle(develop)> migrate
Using network 'develop'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x796bd226fe6ff97a66f497ffaaa3e5a2b90da8c5e5958e15ad848bba2e812e30
  Migrations: 0x8cdaf0cd259887258bc13a92c0a6da92698644c0
Saving successful migration to network...
  ... 0xd7bc86d31bee32fa3988f1c1eabce403a1b5d570340a3a9cdba53a472ee8c956
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying SimpleStorage...
  ... 0x7180903af9514da846cdff85425e1e69be299d4bdb8688734f378e65b829351d
  SimpleStorage: 0x345ca3e014aaf5dca488057592ee47305d9b3e10
Saving successful migration to network...
  ... 0xf36163615f41ef7ed8f4a8f192149a0bf633fe1a2398ce001bf44c43dc7bdda0
Saving artifacts...
truffle(develop)> SimpleStorage.deployed().then(function(instance){return instance.get.call();}).then(function(value){return value.toNumber()});
0
truffle(develop)> SimpleStorage.deployed().then(function(instance){return instance.set(4);});
{ tx: '0x8a7d3343dd2aaa0438157faae678ca57cc6485825bb4ed2ebefe90609dd268ce',
  receipt:
   { transactionHash: '0x8a7d3343dd2aaa0438157faae678ca57cc6485825bb4ed2ebefe90609dd268ce',
     transactionIndex: 0,
     blockHash: '0x48c1bedcfdd08d5968372263cc57773be1da4138becd845b79e425890a7b6b47',
     blockNumber: 5,
     gasUsed: 41642,
     cumulativeGasUsed: 41642,
     contractAddress: null,
     logs: [],
     status: 1 },
  logs: [] }
truffle(develop)> SimpleStorage.deployed().then(function(instance){return instance.get.call();}).then(function(value){return value.toNumber()});
4
truffle(develop)>
```
