import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Spinner } from "./Spinner";

type TxFeedbackProps = {
  status: "idle" | "pending" | "success" | "error";
};

export default function TxFeedback({ status }: TxFeedbackProps) {
  if (status === "pending") {
    return (
      <div className="w-full max-w-xs flex items-center gap-2 bg-blue-50 text-blue-700 rounded-lg px-4 py-2.5 mt-4 text-sm shadow transition-all animate-fade-in mx-auto">
        <Spinner />
        <span className="font-medium">Processing transaction...</span>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="w-full max-w-xs flex items-center gap-2 bg-green-50 text-green-700 rounded-lg px-4 py-2.5 mt-4 text-sm shadow animate-fade-in mx-auto">
        <CheckCircleIcon style={{ width: 14, height: 14 }} className="text-green-500" />
        <span className="font-medium">Minted! 🎉</span>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="w-full max-w-xs flex items-center gap-2 bg-red-50 text-red-700 rounded-lg px-4 py-2.5 mt-4 text-sm shadow animate-fade-in mx-auto">
        <ExclamationCircleIcon style={{ width: 14, height: 14 }} className="text-red-500" />
        <span className="font-medium">Transaction failed.</span>
      </div>
    );
  }
  return null;
}
