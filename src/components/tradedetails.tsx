import React from "react";
import { Banknote } from "lucide-react";

type TradeData = {
  ticketId: string;
  platform: string;
  platformTag: string;
  paidBy: string;
  coinType: string;
  amount: string;
  offerRate: string;
  paymentMethod: string;
  status: string;
  tradeLink: string;
  timeline: { label: string; date: string; time?: string }[];
};

interface Props {
  data: TradeData;
}

export default function TradeDetails({ data }: Props) {
  return (
    <div className="bg-white border-l p-6 w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">Trade Details</h2>

      <div className="space-y-3 text-sm">
        <InfoRow label="Ticket ID" value={data.ticketId} />
        <InfoRow
          label="Platform"
          value={
            <div className="flex items-center gap-2">
              {data.platform}
              <span className="bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">
                {data.platformTag}
              </span>
            </div>
          }
        />
        <InfoRow label="Paid by" value={data.paidBy} />
        <InfoRow label="Coin Type" value={data.coinType} />
        <InfoRow label="Amount" value={data.amount} />
        <InfoRow label="Offer Rate" value={data.offerRate} />
        <InfoRow
          label="Payment Method"
          value={
            <div className="flex items-center gap-2">
              <Banknote size={16} />
              {data.paymentMethod}
            </div>
          }
        />
        <InfoRow
          label="Status"
          value={
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                data.status.toLowerCase() === "paid"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {data.status}
            </span>
          }
        />
        <InfoRow label="Trade Link" value={data.tradeLink} />
      </div>

      {/* Timeline */}
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Timeline</h3>
        <div className="space-y-3 ">
          {data.timeline.map((event, i) => (
            <div
              key={i}
              className={`${
                i === 0
                  ? " border-l-2 border-green-500 px-3"
                  : " border-l-2 border-blue-500 px-3"
              }`}
            >
              <p className="font-medium text-sm">{event.label}</p>
              <p className="text-xs text-gray-500">
                {event.date} {event.time && `• ${event.time}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <div className="text-gray-900">{value}</div>
    </div>
  );
}
