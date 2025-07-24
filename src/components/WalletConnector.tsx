type WalletConnectorProps = {
  account: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
};

export default function WalletConnector({ account, onConnect, onDisconnect }: WalletConnectorProps) {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      {!account ? (
        <button
          onClick={onConnect}
          className="w-full px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex flex-col items-center w-full gap-3">
          <div className="bg-blue-50 text-blue-700 font-mono text-xs sm:text-sm rounded-lg px-3 py-1 shadow-inner break-all text-center select-all transition-all">
            {account}
          </div>
          <button
            onClick={onDisconnect}
            className="px-4 py-1 bg-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-300 text-xs shadow transition"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
