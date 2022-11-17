import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./RadixTooltip.css";

type Props = {
  children: React.ReactNode;
  tip: string;
};
const RadixTooltip = ({ children, tip }: Props) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="TooltipContent"
            sideOffset={5}
            side="bottom"
          >
            {tip}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default RadixTooltip;
