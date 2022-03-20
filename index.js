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

if (window.solana !== 'undefined') {
  console.log('Phantom is installed!');
}

function SolButtonClick(params) {
  getSolAccount();
}

async function getSolAccount() {
  try {
    const resp = await window.solana.connect();
    const PhantomAccount = resp.publicKey.toString()
    console.log(PhantomAccount);
    document.querySelector('#showSolAccount').innerHTML = PhantomAccount;
  } catch (err) {
    console.log(err);
  }
}