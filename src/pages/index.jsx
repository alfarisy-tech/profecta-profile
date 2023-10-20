import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={ "Sectox - CCTV & Security" } />
      <HomeTwo />
    </Wrapper>
  );
}
