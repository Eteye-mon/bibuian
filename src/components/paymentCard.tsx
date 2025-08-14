import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";
interface PaymentCardProps {
  title: string;
  platform: string;
  amount: string;
  status: "urgent" | "info" | "warning";
  walletStatus: "funded" | "unfunded" | "pending";
  messagesCount: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
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
    funded: "bg-[#DCFCE7] text-[#166534] ",
    unfunded: "bg-[#FEE2E2] text-[#DC2626]",
    pending: "bg-[#FEE2E2] text-[#DC2626] ",
  };

  return (
    <div className="flex items-start justify-between bg-white py-[8px] px-[16px]  border-b border-[#E4E4E7] w-full gap-4">
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
          {walletStatus}
        </Badge>
      </div>
      <div className="flex flex-col items-end space-y-3">
        <Badge
          variant="secondary"
          className={`rounded-full ${statusColors[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <MessageSquare size={15} className="inline " />
          {messagesCount} {messagesCount === 1 ? "message" : "messages"}
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
