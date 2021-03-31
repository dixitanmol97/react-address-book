import React from "react";
import Text from "app/baseComponents/text";
import { getInitials } from "app/pages/home/utils";

export default function GroupLabel(props) {
  return (
    <div className="group-label">
      <Text className="group-label-text" text={getInitials(props.group)} />
    </div>
  );
}
