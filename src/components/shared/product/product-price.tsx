import React from "react";
import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // ensure two decimal places
  const stringValue = value.toFixed(2);
  // get int/float
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <div className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </div>
  );
};

export default ProductPrice;
