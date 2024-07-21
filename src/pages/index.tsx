import { FC } from "react";
import Appbar from "../components/organism_appbar";
import FirstTimeUserConfetti from "@/components/organism_first_time_user_confetti";
import DistButtonChunk from "@/components/organism_dist_buttons_chunk";

const HomePage: FC = () => {
  return (
    <Appbar>
      <FirstTimeUserConfetti />
      <DistButtonChunk />
    </Appbar>
  );
};

export default HomePage;
