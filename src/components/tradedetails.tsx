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
    <div className="bg-white border-l border-b rounded-b-xl p-6 w-full max-w-2xl">
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
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66667 8.83335C7.39052 8.83335 7.16667 9.05721 7.16667 9.33335C7.16667 9.6095 7.39052 9.83335 7.66667 9.83335H10.3333C10.6095 9.83335 10.8333 9.6095 10.8333 9.33335C10.8333 9.05721 10.6095 8.83335 10.3333 8.83335H7.66667Z"
                  fill="black"
                  fillOpacity="0.5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.89671 0.213762C9.32048 0.166682 8.60352 0.166684 7.68904 0.166687H6.31096C5.39648 0.166684 4.67952 0.166682 4.10329 0.213762C3.51653 0.261702 3.03179 0.360939 2.59304 0.584496C1.87175 0.95201 1.28532 1.53844 0.917809 2.25972C0.59596 2.89139 0.527065 3.63294 0.507457 4.65712C0.5 5.04659 0.5 5.49019 0.5 5.99616V6.02239C0.499997 6.93687 0.499995 7.65383 0.547075 8.23006C0.595015 8.81682 0.694252 9.30156 0.917809 9.74032C1.28532 10.4616 1.87175 11.048 2.59304 11.4155C3.03179 11.6391 3.51653 11.7383 4.10329 11.7863C4.67951 11.8334 5.39646 11.8334 6.31091 11.8334H7.68905C8.60351 11.8334 9.32049 11.8334 9.89671 11.7863C10.4835 11.7383 10.9682 11.6391 11.407 11.4155C12.1283 11.048 12.7147 10.4616 13.0822 9.74032C13.3057 9.30156 13.405 8.81682 13.4529 8.23006C13.5 7.65384 13.5 6.9369 13.5 6.02244V5.99615C13.5 5.49018 13.5 5.04659 13.4925 4.65712C13.4729 3.63294 13.404 2.89139 13.0822 2.25972C12.7147 1.53844 12.1283 0.95201 11.407 0.584496C10.9682 0.360939 10.4835 0.261702 9.89671 0.213762ZM3.04703 1.4755C3.32131 1.33575 3.6598 1.25333 4.18472 1.21044C4.71548 1.16708 5.39166 1.16669 6.33333 1.16669H7.66667C8.60834 1.16669 9.28452 1.16708 9.81528 1.21044C10.3402 1.25333 10.6787 1.33575 10.953 1.4755C11.4861 1.74714 11.9195 2.18059 12.1912 2.71371C12.3606 3.04617 12.4417 3.46146 12.4762 4.16669H1.52378C1.55835 3.46146 1.63942 3.04617 1.80882 2.71371C2.08046 2.18059 2.5139 1.74714 3.04703 1.4755ZM1.5 6.00002C1.5 5.69685 1.50001 5.42051 1.50153 5.16669H12.4985C12.5 5.42051 12.5 5.69685 12.5 6.00002C12.5 6.94169 12.4996 7.61787 12.4562 8.14863C12.4134 8.67355 12.3309 9.01204 12.1912 9.28633C11.9195 9.81945 11.4861 10.2529 10.953 10.5245C10.6787 10.6643 10.3402 10.7467 9.81528 10.7896C9.28452 10.833 8.60834 10.8334 7.66667 10.8334H6.33333C5.39166 10.8334 4.71548 10.833 4.18472 10.7896C3.6598 10.7467 3.32131 10.6643 3.04703 10.5245C2.5139 10.2529 2.08046 9.81945 1.80882 9.28633C1.66906 9.01204 1.58664 8.67355 1.54375 8.14863C1.50039 7.61787 1.5 6.94169 1.5 6.00002Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </svg>

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
