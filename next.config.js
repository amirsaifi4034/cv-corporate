/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  sassOptions: {
   
    prependData: `@import "/styles/_Variables.scss";`,
},
};