# Blockchain Wallet Demo

Technical test for Blockchain Developer position  
Wallet connection, network detection, and visual transaction feedback  
**Stack:** React + Vite + TypeScript + TailwindCSS + Heroicons

---

## Features

- Connect and disconnect MetaMask wallet
- Detect and display active network (Ethereum, Polygon, etc.)
- Show connected user address
- Simulate a transaction (“Mint NFT”) with visual feedback:
  - Loader/spinner during transaction
  - Animated success message on completion
  - All transaction states reflected in the UI

---

## Component structure

- **WalletConnector:** Connect/disconnect wallet and display address
- **NetworkInfo:** Show active network
- **TransactionButton:** Simulate transaction (mint)
- **TxFeedback:** Display transaction state (pending, success, error)

---

## Getting started

```bash
npm install
npm run dev
Open http://localhost:5173 in your browser.

Technical notes
Uses MetaMask events (accountsChanged, chainChanged) to keep UI in sync with wallet and network.

Global state in App.tsx manages account, network, and transaction state. Child components receive props.

Visual feedback is implemented with TailwindCSS animations and utility classes.

The logic is easily extendable to interact with real smart contracts using ethers.js.

Test project base repository
https://bitbucket.org/dredsoft/ecommerce/src/main
```
