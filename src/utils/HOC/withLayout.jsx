import { lazy} from "react";
const Layout = lazy(() => import("../../layout"));

const withLayout = (OriginalComponent) => (props) => {

  return (
    <Layout>
      <OriginalComponent {...props} />
    </Layout>
  );
};

export default withLayout;
