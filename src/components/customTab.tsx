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
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="urgent"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="warning"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="info"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="urgent"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="warning"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="info"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="urgent"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="warning"
          walletStatus="funded"
          messagesCount={5}
        />
        <PaymentCard
          title="SpeedyPay"
          platform="Paxful"
          amount="₦750,000"
          status="info"
          walletStatus="funded"
          messagesCount={5}
        />
        
      </>
    ),
  },
  {
    name: "Paid(6)",
    value: "paid",
    icon: CheckCircle2,
    content: <><EmptyState message="No Item Found"/>
    </>,
  },
  {
    name: "Dispute",
    value: "dispute",
    icon: CheckCircle2,
    content: <> <EmptyState message="No Item Found"/>
    </>,
  },
];

const TabsWithIcon = () => {
  return (
    <div className="">
      <Tabs defaultValue="excalated" className="gap-4">
        <TabsList>
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
