import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="iconContainer">
        <img src="/thirdweb.svg" className="icon" alt="thirdweb" />
        <img src="/sol.png" className="icon" alt="solana" />
      </div>
      <h1 className="h1">Solana, meet thirdweb 👋</h1>
      <p className="explain">
        Explore what you can do with thirdweb&rsquo;s brand new{" "}
        <b>
          <a
            href="https://portal.thirdweb.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            className="lightPurple"
          >
            Solana SDK
          </a>
        </b>
        .
      </p>
      <WalletMultiButton />
    </div>
  );
};

export default Home;
