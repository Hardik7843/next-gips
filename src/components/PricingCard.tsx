// import { Check } from "lucide-react";

// interface PricingCardProps {
//   title: string;
//   price: string;
//   points: string[];
// }

// export default function PricingCard({
//   title,
//   price,
//   points,
// }: PricingCardProps) {
//   return (
//     <div className="w-80 h-[460px] bg-gray-800 text-white rounded-xl shadow-md p-6 flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-bold mb-2">{title}</h2>
//         <p className="text-4xl font-extrabold mb-6">{price}</p>
//         <ul className="space-y-4">
//           {points.map((point, idx) => (
//             <li key={idx} className="flex items-start gap-3">
//               <Check className="text-green-500 mt-1" size={20} />
//               <span>{point}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  points: string[];
}

export default function PricingCard({
  title,
  price,
  points,
}: PricingCardProps) {
  return (
    <div className="w-80 h-[400px] bg-gray-800 text-white rounded-xl shadow-md p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-4xl font-extrabold mb-6">₹{price}</p>
        <ul className="space-y-4">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="text-green-500 mt-[6px] shrink-0" size={20} />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
