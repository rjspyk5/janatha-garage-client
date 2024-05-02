import { About } from "./About";
import { Services } from "./Services";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Services />
    </div>
  );
};
