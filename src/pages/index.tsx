import { FC } from "react";
import Appbar from "../components/organism_appbar";
import FirstTimeUserConfetti from "@/components/organism_first_time_user_confetti";

const HomePage: FC = () => {
  return (
    <Appbar>
      <FirstTimeUserConfetti />
      <h1>{`Hello World`}</h1>
    </Appbar>
  );
};

export default HomePage;
