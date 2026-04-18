import Title from "../../common/Title";

const Section2 = () => {
  return (
    <div className="flex flex-col gap-10 p-4 sm:px-8 mx-auto max-w-screen-xl w-full">
      <div className="flex justify-center lg:justify-start">
        <Title title="Enterprise Privacy Solutions" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-primary-blue rounded-2xl p-6 lg:p-8 flex flex-col gap-4">
          <h3 className="font-test-tiempos-headline text-primary-blue text-2xl">
            Confidential Finance
          </h3>
          <p className="leading-relaxed lg:text-lg" style={{ textAlign: "justify" }}>
            As institutional adoption of stablecoins accelerates, enterprises
            and financial institutions demand privacy to protect their payroll,
            treasury, revenue, and trading activity. Exposed on-chain
            transactions are a compliance and profitability liability. We are
            building performant, compliant, cross-chain confidential stablecoins
            and RWA that integrate in 30 minutes by developers, with no extra
            clicks for end-users.
          </p>
        </div>
        <div className="border border-primary-blue rounded-2xl p-6 lg:p-8 flex flex-col gap-4">
          <h3 className="font-test-tiempos-headline text-primary-blue text-2xl">
            Private AI
          </h3>
          <p className="leading-relaxed lg:text-lg" style={{ textAlign: "justify" }}>
            Enterprise AI adoption is surging, but businesses cannot share
            confidential data with cloud models. They need AI that is persistent
            and accessible without exposing sensitive information. For enterprises, it is a compliance and
            profitability requirement. The only barriers are performance and
            usability, and that is exactly what we are solving.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Section2;
