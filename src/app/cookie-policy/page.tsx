import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — DENSTUDIO",
  description:
    "Learn about how DENSTUDIO uses cookies on our website, including the types of cookies we use and how to manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy">
      <p>
        This Cookie Policy explains what cookies are, how we use them on the
        DENSTUDIO website, and how you can manage your cookie preferences.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device (computer,
        tablet or mobile phone) when you visit a website. They are widely used
        to make websites work more efficiently, improve user experience and
        provide information to the website owner.
      </p>

      <h2>How We Use Cookies</h2>
      <p>We use cookies on this website for the following purposes:</p>

      <h3>Statistics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our website
        by collecting and reporting information anonymously. This data helps us
        improve the website and your experience. We use tools such as Google
        Analytics for this purpose.
      </p>

      <h3>Functionality Cookies</h3>
      <p>
        These cookies allow the website to remember choices you make (such as
        your preferred language or region) and provide enhanced, more personal
        features. They may also be used to provide services you have requested,
        such as watching a video or commenting on a blog.
      </p>

      <h3>Preference Cookies</h3>
      <p>
        These cookies enable the website to remember information that changes
        the way the website behaves or looks, such as your preferred language or
        the region you are in. They help us to tailor the website to suit your
        individual needs.
      </p>

      <h3>Third-Party Cookies</h3>
      <p>
        Some cookies are placed by third-party services that appear on our
        pages. We do not control the use of these cookies. Third-party cookies
        may include those from social media platforms, advertising networks and
        analytics providers. These cookies may be used to track your browsing
        activity across different websites to build a profile of your interests
        and show you relevant content and advertisements.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        You can control and manage cookies in several ways. Most browsers allow
        you to:
      </p>
      <ul>
        <li>View what cookies are stored on your device and delete them individually.</li>
        <li>Block third-party cookies.</li>
        <li>Block cookies from specific websites.</li>
        <li>Block all cookies from being set.</li>
        <li>Delete all cookies when you close your browser.</li>
      </ul>
      <p>
        Please be aware that restricting cookies may impact the functionality of
        our website. Some features may not work correctly if cookies are
        disabled.
      </p>
      <p>
        To learn more about how to manage cookies in your browser, visit your
        browser&apos;s help section or visit{" "}
        <a
          href="https://www.allaboutcookies.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.allaboutcookies.org
        </a>
        .
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be
        posted on this page. We encourage you to review this policy periodically
        to stay informed about how we use cookies.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at{" "}
        <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a> or
        call us on <a href="tel:02038830588">020 3883 0588</a>.
      </p>
    </LegalPageLayout>
  );
}
