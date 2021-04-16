import { lazy, useEffect } from "react";
import withLayout from "../utils/HOC/withLayout";
import { useSelector } from "react-redux";

const Card = lazy(() => import("../components/jsx/Card"));

function Home() {
  const { images } = useSelector((state) => state.image);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <>
      {images.map(({ id, url }) => (
        <Card key={id} imageUrl={url} />
      ))}
    </>
  );
}

export default withLayout(Home);
// export default Home;
