'use client';

interface Props {
  isAnnual: boolean;
  onToggle: (checked: boolean) => void;
}

export default function BillingToggle({ isAnnual, onToggle }: Props) {
  return (
    <label>
      <input 
        type="checkbox" 
        id="billing-toggle" 
        checked={isAnnual} 
        onChange={(e) => onToggle(e.target.checked)} 
      /> Annual Billing (20% Off)
    </label>
  );
}
