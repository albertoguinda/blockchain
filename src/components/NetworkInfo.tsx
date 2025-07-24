type NetworkInfoProps = {
  network: string | null;
};

const chainName = (id: string | null) => {
  if (!id) return "No network";
  if (id === "0x1") return "Ethereum Mainnet";
  if (id === "0x89") return "Polygon Mainnet";
  if (id === "0x5") return "Goerli Testnet";
  return id;
};

export default function NetworkInfo({ network }: NetworkInfoProps) {
  return (
    <div className="flex items-center gap-2 mt-2 mb-2">
      <span className="text-gray-500 text-sm">Network:</span>
      <span className="font-semibold text-blue-800">{chainName(network)}</span>
    </div>
  );
}
