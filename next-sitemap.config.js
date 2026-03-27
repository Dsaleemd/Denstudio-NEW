/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://denstudio.co.uk',
  generateRobotsTxt: true,
  exclude: ['/thank-you-cosmetic-consult', '/schedule-cosmetic'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/thank-you-cosmetic-consult', '/schedule-cosmetic'] },
    ],
  },
}
