import React from "react";

const BlogSubstribtion = () => {
  return (
    <section className="pt-[100px] pb-16 xs:pt-[110px] xs:pb-20 md:pt-[115px] md:pb-[100px] lg:pb-[120px]">
      <div className="container">
        <div className="rounded-2xl bg-[url('/gradient-9.jpg')] bg-no-repeat bg-cover bg-center px-6 py-12 xs:px-8 xs:py-16 md:px-12 lg:py-20 border shadow-sm">
          <div className="text-center max-w-[700px] mx-auto">
            <h3 className="uppercase text-sm md:text-base font-medium mb-3 md:mb-4">
              Blog
            </h3>
            <h2 className="text-4xl xs:text-5xl md:text-[64px] lg:text-[70px] font-bold mb-[10px] md:mb-4">
              Blog &amp; Resources
            </h2>
            <p className="text-gray-700 mb-8 md:mb-10">
              Unleash the full potential of your Linklush bio page with expert
              guides, in-depth comparisons, and actionable tips.
            </p>
            <div className="max-w-[464px] mx-auto">
              <form className="rounded-lg xs:border flex flex-col xs:flex-row gap-3 xs:bg-white">
                <input
                  className="flex h-9 w-full rounded-md border-zinc-200 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 border xs:border-0 p-4 min-h-[52px] bg-white"
                  placeholder="Enter your email"
                  required
                  name="EMAIL"
                  style={{ boxShadow: "none" }}
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 min-h-[52px] xs:min-h-0 xs:my-auto xs:mr-2">
                  Subscribe
                </button>
              </form>

              <div
                id="blog-subscribe"
                className="cf-turnstile mt-3 rounded-lg overflow-hidden w-fit"
                data-theme="light"
                data-appearance="interaction-only"
              >
                <iframe
                  src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/if/ov2/av0/rcv0/0/aopyr/0x4AAAAAAASJU2WCD1G40R1H/light/normal"
                  allow="cross-origin-isolated; fullscreen; autoplay"
                  sandbox="allow-same-origin allow-scripts allow-popups"
                  id="cf-chl-widget-aopyr"
                  title="Widget containing a Cloudflare security challenge"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    width: "0px",
                    height: "0px",
                  }}
                ></iframe>
                <input
                  type="hidden"
                  name="cf-turnstile-response"
                  id="cf-chl-widget-aopyr_response"
                  value="0.8npgQlPcvHB4EOEZk98CP6H63T7lZ-CJg2QFPp-_Hm8qSlrSEwjsi8lIUdW9C07omf8r5yfT3iWoOOaks_Hpd4cryy3rawjbtBG4w15gE5BRYaUbc_vALmLyz8FdWNo6WNbL2t4213TOru09BmbpjnAvyGCNYSgjPVvTEc8KzOfgDF2Qmp_v5FvONqwH2EaZi7JdQGcBWHKyWa4XjT7ryvHvF2SgINUFEpUiESc5hFW44AzP_2sdTfvmj1cpGTEc-9ar0LMAtSh0ND0QzeLA31ZeszQgos3suAdoEfWvS-1lJPpwhDKPRVKWPud8oLu65BtE-jbImxEOeT4sizQOvDY0YTvRc5Wz-0RjsOutPrlSR6N0hg1fQrhRIH7nqIxF7WMaMBYB8_39COaVvPyeOa8DEQfnupjT_tqTt-LSjZ3PlwlBAe29nRjKgxFn-C-m.BAkE3uu20s_UkTIkuU-qEw.c1c98dd631bd01aaf914d3f91d60e4d8c406faa3830bdf9ab2f6cd94e84db681"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSubstribtion;
