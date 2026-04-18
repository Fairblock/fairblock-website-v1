// components
import Title from "../../common/Title";

const Section2 = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-12 p-4 sm:px-8 mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-8 lg:w-2/3">
        <div className="flex justify-center lg:justify-start mx-auto w-4/5 sm:w-full">
          <Title title="Enterprise Privacy Solutions" />
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
            As institutional adoption of stablecoins accelerates, enterprises
            and financial institutions demand privacy to protect their payroll,
            treasury, revenue, and trading activity. Exposed on-chain
            transactions are a compliance and profitability liability. We are
            building performant, compliant, cross-chain confidential stablecoins
            and RWA that integrate in 30 minutes by developers, with no extra
            clicks for end-users.
          </p>
          <p>
            Enterprise AI adoption is surging, but businesses cannot share
            confidential data with cloud models. They need AI that is persistent
            and accessible without exposing sensitive information. This is not
            just a preference, it is a compliance requirement. Privacy is not a
            retail feature. For enterprises, it is a compliance and
            profitability requirement. The only barriers are performance and
            usability, and that is exactly what we are solving.
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/3">
        <img src="/home/fairy-ring.svg" alt="Fairy ring" />
      </div>
    </div>
  );
};
export default Section2;
