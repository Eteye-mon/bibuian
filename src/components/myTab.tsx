"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import TabsWithIcon from "./customTab";
import TradeTicket from "./tradeTicket";
import EmptyState from "./emptystate";
import { ChatMessagePane } from "./chatpane";
import TradeDetails from "./tradedetails";
import CustomMessageUi from "./custommessageui";

function MyTab() {
    const tradeData = {
      ticketId: "PAX-12345",
      platform: "PaxfulAgent001",
      platformTag: "Paxful",
      paidBy: "Aisha Vendor",
      coinType: "Bitcoin",
      amount: "₦1,850,000",
      offerRate: "% 1750 NGN/USD",
      paymentMethod: "Bank Transfer",
      status: "Paid",
      tradeLink: "AFYzaQA8stc",
      timeline: [
        { label: "Trade Opened", date: "May 12, 2025", time: "10:35 AM" },
        { label: "Funds Deposited", date: "May 12, 2025" },
      ],
  };
    const [showTradeDetails, setShowTradeDetails] = useState(false);

  return (
    <>
      <Tabs defaultValue="all" className="w-full gap-0">
        <TabsList className="bg-[#F9FAFB] w-full rounded-none">
          <TabsTrigger
            value="all"
            className="rounded-none w-full md:w-[290px] h-[32px] active"
          >
            All(6){" "}
          </TabsTrigger>
          <TabsTrigger
            value="urgent"
            className="rounded-none w-full md:w-[290px] h-[32px]"
          >
            Urgent(11)
          </TabsTrigger>
          <TabsTrigger
            value="warning"
            className="rounded-none w-full md:w-[290px] h-[32px]"
          >
            Warning(11)
          </TabsTrigger>
          <TabsTrigger
            value="info"
            className="rounded-none w-full md:w-[290px] h-[32px]"
          >
            Info(11)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid md:grid-cols-3 gap-  bg-white min-h-screen">
            <div className="py-3 w-full border-r min-h-screen">
              <TabsWithIcon />
            </div>
            <div className="col-span-2 hidden md:block">
              <TradeTicket
                agent="PaxfulAgent001"
                status="Urgent"
                paidTo="Aisha Vendor"
                ticketId="PAX-12345"
                date="May 12"
                tradeLink="AFYzaQA8stc"
                openedAgo="72d 1h"
                onToggleDetails={() => setShowTradeDetails((prev) => !prev)} // <-- Pass toggle function
                isDetailsOpen={showTradeDetails}
              />

              <div className="flex justify-between">
                <div className="bg-[#f9fafb] w-full p-6 flex flex-wrap justify-end items-end ">
                  <ChatMessagePane />
                  <CustomMessageUi />
                </div>
                <div className="bg-gray-100 flex justify-center items-start">
                  {showTradeDetails && <TradeDetails data={tradeData} />}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="urgent">
          <EmptyState message="No Item Found" />
        </TabsContent>
        <TabsContent value="warning">
          <EmptyState message="No Item Found" />
        </TabsContent>
        <TabsContent value="info">
          <EmptyState message="No Item Found" />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default MyTab;
