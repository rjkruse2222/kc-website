export default function About() {
  return (
    <section
      className="who-we-are-section py-24 md:py-32 bg-cover bg-left bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/graph-rising-loop.svg)',
        backgroundSize: '34%',
        backgroundPosition: '-60px center'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric Layout: 1/4 empty + 3/4 content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Empty 1/4 column for spacing */}
          <div className="hidden md:block"></div>

          {/* Main 3/4 content area */}
          <div className="md:col-span-3">
            {/* "Who We Are" Label */}
            <div className="super-text-left mb-4">
              <p className="text-[#003067] uppercase tracking-[4px] text-sm font-normal">
                Who We Are
              </p>
            </div>

            {/* Two-column layout for heading + description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left: Heading */}
              <div>
                <h2 className="text-4xl font-semibold text-[#333] leading-tight">
                  Kruse & Crawford<br />
                  is Your Cincinnati<br />
                  Accounting Team
                </h2>
              </div>

              {/* Right: Description */}
              <div>
                <p className="text-base font-light text-[#666] leading-relaxed">
                  Kruse and Crawford is a Cincinnati based accounting and business advisory firm
                  that specializes in small to lower middle market companies. We are headquartered
                  in historic Longworth Hall. We started in 2005 and offer services such as
                  accounting, tax preparation, financial statement reporting, and management
                  consulting. Let Kruse and Crawford be your one-stop shop for all your business's
                  needs.
                </p>
              </div>
            </div>

            {/* "OUR SERVICES" Label */}
            <div className="super-text-right text-right mb-4">
              <p
                className="inline-block bg-white text-[#003067] uppercase tracking-[4px] text-sm font-normal pl-8"
                style={{
                  backgroundImage: 'url(/images/super-text-bg.png)',
                  backgroundPosition: 'left bottom',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                OUR SERVICES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
