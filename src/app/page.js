import FriendsSection from "./components/Homepages/FriendsSection";
import HeroSection from "./components/Homepages/HeroSection";

const HomePage = () => {
  return (
    <div className="bg-base-300   flex flex-col flex-1 ">
      <HeroSection />
      <FriendsSection />
    </div>
  );
};

export default HomePage;
