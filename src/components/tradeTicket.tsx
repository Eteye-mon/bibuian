import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  CircleArrowOutUpRight,
  CircleCheck,
  CircleX,
  UserRoundCheck,
} from "lucide-react";
import CustomDialog from "./customdialog";

interface TradeTicketProps {
  agent: string;
  status: "Urgent" | "Normal" | string;
  paidTo: string;
  ticketId: string;
  date: string;
  tradeLink: string;
  openedAgo: string;
}

const TradeTicket: React.FC<TradeTicketProps> = ({
  agent,
  status,
  paidTo,
  ticketId,
  date,
  tradeLink,
  openedAgo,
}) => {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-white border-b gap-3">
      <div className="flex flex-col min-w-[150px]">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{agent}</span>
          <span
            className={`px-2 py-0.5 text-xs rounded-full ${
              status === "Urgent"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </span>
        </div>
        <span className="text-sm text-gray-500">Paid: {paidTo}</span>
      </div>

      <div className="flex flex-col text-sm text-gray-500 min-w-[180px]">
        <span>
          Ticket ID: {ticketId} • {date}
        </span>
        <span className="truncate">Trade Link: {tradeLink}</span>
      </div>

      <div className="flex items-center gap-4 min-w-[200px]">
        <span className="text-sm text-gray-500">⏱ Opened {openedAgo} ago</span>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-[8px] border rounded-md bg-white hover:bg-gray-50  flex items-center">
                Actions <ChevronDown/>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-[#16A34A]">
                  <CircleCheck className="text-[#16A34A]" />
                  Mark as Resolved
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#FFD52D]">
                  <CircleArrowOutUpRight className="text-[#FFD52D]" />
                  Forward to Admin
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-[#DC2626]"
                  onClick={() => setCancelDialogOpen(true)}
                >
                  <CircleX className="text-[#DC2626]" />
                  Cancel Trade
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setAssignDialogOpen(true)}>
                  <UserRoundCheck className="text-[#000]" />
                  Reassign Trade
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button className="bg-[#F59E0B] text-white p-[8px] rounded-md text-sm">
          Trade Details
        </button>
      </div>
      <CustomDialog
        open={cancelDialogOpen}
        onOpenChange={setCancelDialogOpen}
        title="Cancel Trade"
        desc="Are you sure you want to cancel this trade? This action cannot be undone."
        label1="Reason for cancellation"
        label1prop="Select a reason"
        label2="Additional Note"
        label2prop="Provide any additional details about the cancellation..."
        actionBtnText="Confirm Cancellation"
        actionBtnStyle="bg-[#DC2626] text-white hover:bg-red-500"
      />
      <CustomDialog
        open={assignDialogOpen}
        onOpenChange={setAssignDialogOpen}
        title="Reassign Trade"
        desc="Select a support agent to reassign this ticket to."
        label1="Assign to"
        label1prop="Select an agent"
        label2="Additional Note"
        label2prop="Provide context and details for the agent taking over..."
        actionBtnText="Reassign Ticket"
        actionBtnStyle="bg-[#F59E0B] text-white hover:bg-yellow-500"
      />
    </div>
  );
};

export default TradeTicket;
