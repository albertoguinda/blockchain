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
      className="w-full px-5 py-2.5 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 disabled:bg-green-300 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400 mt-2 text-base flex items-center justify-center gap-2"
      aria-busy={loading}
    >
      {loading ? (
        <>
          <Spinner />
          <span>Confirm in wallet...</span>
        </>
      ) : (
        "Mint NFT"
      )}
    </button>
  );
}
