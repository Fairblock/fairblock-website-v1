import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// components
import Title from "../../common/Title";
import Button from "../../common/Button";

const Section2 = () => {
  const [buttonText, setButtonText] = useState<string>(
    "Confidential Stablecoins"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonText((prevText) =>
        prevText === "Confidential Stablecoins"
          ? "Protected trading"
          : "Confidential Stablecoins"
      );
    }, 1250);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-12 p-4 sm:px-8 mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-8 lg:w-2/3">
        <div className="flex justify-center lg:justify-start mx-auto w-4/5 sm:w-full">
          <Title title="Trustworthy Rails for Open Finance" />
        </div>
        <div className="lg:hidden">
          <img
            className="mx-auto w-3/4 sm:w-1/2"
            src="/home/fairy-ring.svg"
            alt="Fairy ring"
          />
        </div>
        <div
          className="flex flex-col gap-4 lg:text-lg lg:text-left"
          style={{ textAlign: "justify" }}
        >
          <p>
            Most Web2 and even many Web3 applications rely on fully trusted
            intermediaries, making them vulnerable to security breaches and
            silent manipulation. But fully exposed blockchains are not the
            answer either: they leak sensitive data like stablecoin transfers,
            liquidation triggers, and private AI inputs. Whether it's blind
            trust or reckless data exposure, both models invite exploitation,
            distort price discovery, and ultimately block the next wave of
            impactful onchain applications.
          </p>
          <p>
            Fairblock solves this with dynamic confidential computing
            eliminating information leakage and manipulation. The results:
            encrypted stablecoins, new financial primitives, better pricing and
            trustworthy financial rails for institutions.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Link to="capps">
            <Button buttonText={buttonText} size="w-[210px] sm:w-[321px]" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/3">
        <img src="/home/fairy-ring.svg" alt="Fairy ring" />
      </div>
    </div>
  );
};
export default Section2;
