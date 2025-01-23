function getBalance() {
  const balance = await contract.methods.balanceOf(address).call();
  return new web3.utils.BN(balance);
}

// Correct usage of BigNumber
const balanceBN = new web3.utils.BN(await getBalance());
if (balanceBN.gt(new web3.utils.BN(10))) {
  // ...
}