import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Spinner } from "./Spinner";

type TxFeedbackProps = {
  status: "idle" | "pending" | "success" | "error";
};

export default function TxFeedback({ status }: TxFeedbackProps) {
  if (status === "pending") {
    return (
      <div className="flex items-center gap-2 bg-blue-50 text-blue-700 rounded-md px-3 py-2 mt-4 text-sm shadow transition-all">
        <Spinner />
        Processing transaction...
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex items-center gap-2 bg-green-50 text-green-700 rounded-md px-3 py-2 mt-4 text-sm shadow animate-fade-in">
        <CheckCircleIcon className="h-5 w-5" />
        Minted! 🎉
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex items-center gap-2 bg-red-50 text-red-700 rounded-md px-3 py-2 mt-4 text-sm shadow">
        <ExclamationCircleIcon className="h-5 w-5" />
        Transaction failed.
      </div>
    );
  }
  return null;
}
