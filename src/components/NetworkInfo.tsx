import { GlobeAltIcon } from "@heroicons/react/24/outline";

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

const chainColor = (id: string | null) => {
  if (!id) return "bg-gray-200 text-gray-600";
  if (id === "0x1") return "bg-blue-100 text-blue-700";
  if (id === "0x89") return "bg-purple-100 text-purple-700";
  if (id === "0x5") return "bg-green-100 text-green-700";
  return "bg-gray-100 text-gray-800";
};

export default function NetworkInfo({ network }: NetworkInfoProps) {
  return (
    <div className="flex items-center gap-2 mt-2 mb-2">
      <GlobeAltIcon style={{ width: 14, height: 14 }} className="text-blue-400 mr-1" aria-hidden="true" />
      <span className="text-gray-500 text-sm"> Network: </span>
      <span className={`font-semibold rounded-lg px-2 py-1 text-xs ${chainColor(network)}`}>
        {chainName(network)}
      </span>
    </div>
  );
}
