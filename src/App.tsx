import { useEffect, useState } from "react";
import WalletConnector from "./components/WalletConnector";
import NetworkInfo from "./components/NetworkInfo";
import TransactionButton from "./components/TransactionButton";
import TxFeedback from "./components/TxFeedback";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import "./App.css"; // importa tu CSS aquí

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
    <div className="AppCenterCard">
      <div className="Card">
        <h1 className="text-center" style={{ fontWeight: 800, fontSize: 28, margin: 0 }}>
          <img
            src="/metamask.svg"
            alt="MetaMask Logo"
            style={{ width: 36, height: 36, marginBottom: 10 }}
          />
          <br />
          Blockchain Wallet Demo
        </h1>
        <WalletConnector account={account} onConnect={connectWallet} onDisconnect={disconnectWallet} />
        <NetworkInfo network={network} />
        {account && (
          <>
            <TransactionButton loading={loading} onClick={mint} />
            <TxFeedback status={txStatus} />
          </>
        )}
        <div className="text-center" style={{ marginTop: 24 }}>
          <a
            href="https://bitbucket.org/dredsoft/ecommerce/src/main"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#6dafe6",
              textDecoration: "underline",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 16,
            }}
          >
            Test Project Repo
            <ArrowTopRightOnSquareIcon style={{ width: 14, height: 14, marginLeft: 4 }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
