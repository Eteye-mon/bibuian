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
  onToggleDetails: () => void; 
  isDetailsOpen?: boolean;
}

const TradeTicket: React.FC<TradeTicketProps> = ({
  agent,
  status,
  paidTo,
  ticketId,
  date,
  tradeLink,
  openedAgo,
  onToggleDetails,
  isDetailsOpen,
}) => {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [assignDialogOpen, setAssignDialogOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-white border-b gap-3">
      <div className="flex flex-col min-w-[150px]">
        <div className="flex items-center gap-4">
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
        <span className="text-[12px] text-[#6B7280CC] font-normal ">
          Paid: {paidTo}
        </span>
      </div>

      <div className="flex flex-col text-[12px] text-[#6B7280CC] font-normal  min-w-[180px] ">
        <span>
          Ticket ID: {ticketId} • {date}
        </span>
        <span className="truncate text-[12px] text-[#6B7280CC] font-normal ">
          Trade Link: {tradeLink}
        </span>
      </div>

      <div className="flex items-center gap-4 min-w-[200px]">
        <span className="flex items-center gap-3 text-[12px] text-[#6B7280CC] font-normal ">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.63695 0.764846C2.77172 0.657031 2.79357 0.460377 2.68575 0.325607C2.57794 0.190838 2.38128 0.168988 2.24651 0.276803L1.20485 1.11014C1.07008 1.21795 1.04823 1.41461 1.15604 1.54938C1.26386 1.68414 1.46051 1.70599 1.59528 1.59818L2.63695 0.764846Z"
              fill="#6B7280"
            />
            <path
              d="M8.05362 0.276803C7.91885 0.168988 7.72219 0.190838 7.61438 0.325607C7.50656 0.460377 7.52841 0.657031 7.66318 0.764846L8.70485 1.59818C8.83962 1.70599 9.03627 1.68414 9.14409 1.54938C9.2519 1.41461 9.23005 1.21795 9.09528 1.11014L8.05362 0.276803Z"
              fill="#6B7280"
            />
            <path
              d="M5.46257 3.33332C5.46257 3.16074 5.32265 3.02082 5.15007 3.02082C4.97748 3.02082 4.83757 3.16074 4.83757 3.33332L4.83757 4.79166C4.83757 5.30942 5.2573 5.72916 5.77507 5.72916H6.40007C6.57265 5.72916 6.71257 5.58925 6.71257 5.41666C6.71257 5.24407 6.57265 5.10416 6.40007 5.10416H5.77507C5.60248 5.10416 5.46257 4.96425 5.46257 4.79166L5.46257 3.33332Z"
              fill="#6B7280"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.15007 0.520824C2.67629 0.520824 0.670898 2.52622 0.670898 4.99999C0.670898 7.47377 2.67629 9.47916 5.15007 9.47916C7.62384 9.47916 9.62923 7.47377 9.62923 4.99999C9.62923 2.52622 7.62384 0.520824 5.15007 0.520824ZM1.2959 4.99999C1.2959 2.87139 3.02147 1.14582 5.15007 1.14582C7.27866 1.14582 9.00423 2.87139 9.00423 4.99999C9.00423 7.12859 7.27866 8.85416 5.15007 8.85416C3.02147 8.85416 1.2959 7.12859 1.2959 4.99999Z"
              fill="#6B7280"
            />
          </svg>
          Opened {openedAgo} ago
        </span>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-[8px] border rounded-md bg-white hover:bg-gray-50 text-[12px] text-[#000000] font-normal  flex items-center">
                Actions <ChevronDown className="text-[12px] text-[#000000]" />
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

        <button
          onClick={onToggleDetails}
          className="bg-[#F59E0B] text-white p-[8px] rounded-md text-sm"
        >
          {isDetailsOpen ? "Hide Details" : "Trade Details"}
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
