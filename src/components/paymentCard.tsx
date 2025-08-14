import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

interface PaymentCardProps {
  active: boolean;
  title: string;
  platform: string;
  amount: string;
  status: "urgent" | "info" | "warning";
  walletStatus: "funded" | "unfunded" | "pending";
  messagesCount: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  active,
  title,
  platform,
  amount,
  status,
  walletStatus,
  messagesCount,
}) => {
  const statusColors = {
    urgent: "bg-[#FEE2E2] text-[#DC2626] border-[#EF444433]",
    info: "bg-[#DBEAFE] text-[#1E40AF] border-[#1E40AF]",
    warning: "bg-[#FEF3C7] text-[#D97706] border-[#FED7AA]",
  };

  const walletstatusColors = {
    funded: "bg-[#DCFCE7] text-[#166534]",
    unfunded: "bg-[#FEE2E2] text-[#DC2626]",
    pending: "bg-[#FEF9C3] text-[#854D0E]",
  };

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div
      className={`flex items-start justify-between ${
        active ? "bg-gray-300" : "bg-white"
      }  py-2 px-4 border-b border-[#E4E4E7] w-full gap-4 cursor-pointer`}
    >
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{amount}</p>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-900">{platform}</p>
        <Badge
          variant="secondary"
          className={`rounded-full ${walletstatusColors[walletStatus]}`}
        >
          {capitalize(walletStatus)}
        </Badge>
      </div>

      <div className="flex flex-col items-end space-y-3">
        {walletStatus === "funded" && (
          <Badge
            variant="secondary"
            className={`rounded-full ${statusColors[status]}`}
          >
            {capitalize(status)}
          </Badge>
        )}
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <MessageSquare size={15} />
          {messagesCount} {messagesCount === 1 ? "message" : "messages"}
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
