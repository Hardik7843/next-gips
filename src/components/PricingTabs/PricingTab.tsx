import PricingCard from "@/components/PricingCard"; // adjust the path as needed
import { PricingCardProps } from "@/config/priceConfig";

interface Props {
  priceConfig: PricingCardProps[];
}

const PricingTab: React.FC<Props> = ({ priceConfig }) => {
  return (
    <div className="justify-items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      {priceConfig.map((plan, idx) => (
        <div key={idx}>
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            points={plan.points}
          />
        </div>
      ))}
    </div>
  );
};

export default PricingTab;
