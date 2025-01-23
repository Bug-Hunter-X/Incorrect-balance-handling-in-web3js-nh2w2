function getBalance() {
  const balance = await contract.methods.balanceOf(address).call();
  return balance;
}

//Error: balance is returned as a string instead of a BigNumber

// Incorrect usage of the returned balance value
if (balance > 10) {
  // ...
}