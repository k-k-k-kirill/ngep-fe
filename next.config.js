/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  images: {
    domains: ["127.0.0.1", "https://ngep-uploads.s3.eu-north-1.amazonaws.com"],
  },
});
