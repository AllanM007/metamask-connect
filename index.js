if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }

function EthButtonClick() {
    getAccount();
}

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);
  document.querySelector('#showAccount').innerHTML = account;
}

if (typeof window.solana.isPhantom !== 'undefined') {
  console.log('Phantom is installed!');
}

function SolButtonClick(params) {
  
}