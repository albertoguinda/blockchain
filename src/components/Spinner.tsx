import { ArrowPathIcon } from "@heroicons/react/24/outline";

export function Spinner() {
  return (
    <ArrowPathIcon
      className="text-blue-500"
      style={{ width: 18, height: 18, minWidth: 18, minHeight: 18, maxWidth: 18, maxHeight: 18 }}
    />
  );
}
