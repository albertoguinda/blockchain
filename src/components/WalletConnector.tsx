type WalletConnectorProps = {
  account: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
};

export default function WalletConnector({ account, onConnect, onDisconnect }: WalletConnectorProps) {
  return (
    <div className="flex flex-col items-center w-full gap-3">
      {!account ? (
        <button
          onClick={onConnect}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex flex-col items-center w-full gap-2">
          <div className="font-mono text-sm text-blue-700 break-all text-center">{account}</div>
          <button
            onClick={onDisconnect}
            className="text-xs bg-gray-200 rounded px-3 py-1 hover:bg-gray-300 font-medium transition"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
