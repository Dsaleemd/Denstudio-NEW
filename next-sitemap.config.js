/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://denstudio.co.uk',
  generateRobotsTxt: true,
  exclude: [
    '/thank-you-cosmetic-consult',
    '/schedule-cosmetic',
    '/about2',
    '/home',
    '/mega-concerns',
    '/appointments',
    '/new-page-2',
    '/new-page-3',
    '/new-page-4',
    '/new-page-5',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/thank-you-cosmetic-consult', '/schedule-cosmetic', '/about2', '/home', '/mega-concerns', '/appointments'] },
    ],
  },
}
