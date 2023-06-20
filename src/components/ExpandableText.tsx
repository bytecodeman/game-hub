import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  minSize?: number;
  children: string;
}
const ExpandableText = ({ minSize = 300, children }: Props) => {
  const [expand, setExpand] = useState(false);

  if (!children) return null;

  if (children.length <= minSize) return <Text>{children}</Text>;

  let displayText = expand
    ? children
    : children.substring(0, minSize) + " . . .";

  return (
    <Text>
      {displayText}{" "}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={2}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
