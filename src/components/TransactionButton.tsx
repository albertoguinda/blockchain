import { Spinner } from "./Spinner";

type TransactionButtonProps = {
  loading: boolean;
  onClick: () => void;
};

export default function TransactionButton({ loading, onClick }: TransactionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full px-4 py-2 bg-green-600 text-white rounded-xl font-semibold shadow hover:bg-green-700 disabled:bg-green-300 transition focus:outline-none focus:ring-2 focus:ring-green-400 mt-2"
    >
      {loading ? (
        <span className="flex items-center gap-2 justify-center">
          <Spinner />
          Confirm in wallet...
        </span>
      ) : (
        "Mint NFT"
      )}
    </button>
  );
}
