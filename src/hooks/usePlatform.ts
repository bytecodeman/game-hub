import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();

  return data?.results.find((platForm) => platForm.id === id);
};

export default usePlatform;
