import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  id: number;
}

const GameScreenShots = ({ id }: Props) => {
  const { data, error, isLoading } = useScreenShots(id);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ sm: 1, md: 2 }}>
      {data?.results.map((ss) => (
        <Image key={ss.id} src={ss.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
