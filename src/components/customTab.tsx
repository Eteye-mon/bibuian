import { Info, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentCard from "./paymentCard";
import EmptyState from "./emptystate";


const tabs = [
  {
    name: "Excalated (2)",
    value: "excalated",
    icon: Info,
    content: (
      <>
        <PaymentCard
        active={true}
          title="PaxfulAgent001"
          platform="Paxful"
          amount="₦1,850,000"
          status="urgent"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
        active={false}
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="warning"
          walletStatus="unfunded"
          messagesCount={5}
        />
        <PaymentCard
        active={false}
          title="CryptoExchange"
          platform="CryptoEx"
          amount="₦2,500,000"
          status="info"
          walletStatus="unfunded"
          messagesCount={5}
        />
        <PaymentCard
        active={false}
          title="QuickTrade"
          platform="QuickTrade"
          amount="₦750,000"
          status="warning"
          walletStatus="unfunded"
          messagesCount={5}
        />
        <PaymentCard
        active={false}
          title="PaxfulAgent001"
          platform="Paxful"
          amount="₦750,000"
          status="urgent"
          walletStatus="unfunded"
          messagesCount={8}
        />
      </>
    ),
  },
  {
    name: "Paid (6)",
    value: "paid",
    icon: CheckCircle2,
    content: (
      <>
        <EmptyState message="No Item Found" />
      </>
    ),
  },
  {
    name: "Dispute",
    value: "dispute",
    icon: CheckCircle2,
    content: (
      <>
        {" "}
        <EmptyState message="No Item Found" />
      </>
    ),
  },
];

const TabsWithIcon = () => {
  return (
    <div className="p">
      <Tabs defaultValue="excalated" className="gap-4 w-full bg-[#F3F4F6]">
        <TabsList className="flex items-center justify-center gap-4 mx-auto mt-5 ">
          {tabs.map(({ icon: Icon, name, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center rounded-none p-[6px] text-[12px] bg-white  gap-2"
            >
              <Icon className="text-[12px]" />
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="text-muted-foreground text-[12px]">{tab.content}</div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsWithIcon;
