/** @type {import("next").NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
    "app/locales/next-intl.config.ts"
  );

const nextConfig = {

};
 
export default withNextIntl(nextConfig);

// export default nextConfig;
