import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  id: number;
}

const GameTrailers = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailers(id);

  if (isLoading) return null;
  if (error) throw error;

  const trailer = data?.results[0];
  if (!trailer) return null;

  return <video src={trailer.data[480]} poster={trailer.preview} controls />;
};

export default GameTrailers;
