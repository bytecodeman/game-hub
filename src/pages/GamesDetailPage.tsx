import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenShots from "../components/GameScreenShots";
import GameTrailers from "../components/GameTrailers";
import useGame from "../hooks/useGame";

const GamesDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Grid
      gap={3}
      templateAreas={{
        base: `"left" "right"`,
        md: `"left right"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
    >
      <GridItem area="left">
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem area="right">
        <GameTrailers id={game.id} />
        <GameScreenShots id={game.id} />
      </GridItem>
    </Grid>
  );
};

export default GamesDetailPage;
