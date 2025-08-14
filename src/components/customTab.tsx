import { Info, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentCard from "./paymentCard";
import EmptyState from "./emptystate";


const tabs = [
  {
    name: "Excalated(2)",
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
    name: "Paid(6)",
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
    <div className="">
      <Tabs defaultValue="excalated" className="gap-4">
        <TabsList className="flex items-center justify-center">
          {tabs.map(({ icon: Icon, name, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center gap-1 px-2.5 sm:px-3">
              <Icon />
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="text-muted-foreground text-sm">{tab.content}</div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsWithIcon;
