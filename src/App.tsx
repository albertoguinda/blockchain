import { useEffect, useState } from "react";
import WalletConnector from "./components/WalletConnector";
import NetworkInfo from "./components/NetworkInfo";
import TransactionButton from "./components/TransactionButton";
import TxFeedback from "./components/TxFeedback";

declare global {
  interface Window {
    ethereum?: any;
  }
}

function App() {
  const [account, setAccount] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [txStatus, setTxStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  useEffect(() => {
    if (!window.ethereum) return;

    const handleNetwork = async () => {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      setNetwork(chainId);
    };

    window.ethereum.on("chainChanged", handleNetwork);
    handleNetwork();

    return () => {
      window.ethereum.removeListener("chainChanged", handleNetwork);
    };
  }, []);

  useEffect(() => {
    if (!window.ethereum) return;
    const handleAccounts = (accounts: string[]) => {
      setAccount(accounts.length > 0 ? accounts[0] : null);
    };

    window.ethereum.on("accountsChanged", handleAccounts);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccounts);
    };
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    setNetwork(chainId);
  };

  const disconnectWallet = () => {
    setAccount(null);
    setNetwork(null);
  };

  const mint = async () => {
    setTxStatus("pending");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTxStatus("success");
      setTimeout(() => setTxStatus("idle"), 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-cyan-50 to-indigo-100">
      <div className="w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-6 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-4">
          🦊 Blockchain Wallet Demo
        </h1>
        <WalletConnector account={account} onConnect={connectWallet} onDisconnect={disconnectWallet} />
        <NetworkInfo network={network} />
        {account && (
          <>
            <TransactionButton loading={loading} onClick={mint} />
            <TxFeedback status={txStatus} />
          </>
        )}
        <div className="mt-8 text-center text-gray-400 text-xs">
          <a
            href="https://bitbucket.org/dredsoft/ecommerce/src/main"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Test Project Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
