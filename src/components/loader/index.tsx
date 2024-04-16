import { Main } from "../../style";
import Lottie from "lottie-react";
import animation from "../../../loader.json";

const Loader = () => {
  return (
    <Main className="w-full h-screen m-auto">
      <Lottie animationData={animation} loop={true} autoplay={true} />
    </Main>
  );
};

export default Loader;
