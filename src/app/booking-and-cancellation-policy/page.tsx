import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Booking and Cancellation Policy — DENSTUDIO",
  description:
    "Read the DENSTUDIO booking and cancellation policy, including information about deposits, rescheduling, late arrivals and refunds.",
};

export default function BookingAndCancellationPolicyPage() {
  return (
    <LegalPageLayout title="Booking and Cancellation Policy">
      <p>
        At DENSTUDIO, we want every patient to have the best possible
        experience. To ensure we can provide the highest standard of care, we
        ask that all patients familiarise themselves with our booking and
        cancellation policy.
      </p>

      <h2>Booking Methods</h2>
      <p>Appointments can be booked in the following ways:</p>
      <ul>
        <li>
          <strong>Online:</strong> Through our website at{" "}
          <a href="/contact-us">denstudio.co.uk/contact-us</a>.
        </li>
        <li>
          <strong>By phone:</strong> Call us on{" "}
          <a href="tel:02038830588">020 3883 0588</a>.
        </li>
        <li>
          <strong>By email:</strong> Email us at{" "}
          <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a>.
        </li>
        <li>
          <strong>In person:</strong> At the practice during opening hours.
        </li>
      </ul>

      <h2>Deposits</h2>
      <p>
        A deposit may be required at the time of booking to secure your
        appointment, particularly for longer or specialist treatment sessions.
        The deposit amount will be communicated to you at the time of booking
        and will be deducted from the total cost of your treatment.
      </p>
      <p>
        Deposits are non-refundable in the event of a late cancellation or
        no-show (see below).
      </p>

      <h2>Rescheduling</h2>
      <p>
        We understand that plans can change. If you need to reschedule your
        appointment, please give us at least <strong>48 hours&apos; notice</strong>.
        This allows us to offer the appointment to another patient.
      </p>
      <p>
        Appointments rescheduled with less than 48 hours&apos; notice may be
        subject to a cancellation fee, and any deposit paid may be forfeited.
      </p>

      <h2>Cancellations</h2>
      <p>
        If you need to cancel your appointment, please notify us at least 48
        hours in advance. Cancellations made with less than 48 hours&apos;
        notice will be subject to a cancellation fee, which may be equivalent to
        the full cost of the appointment or the deposit amount.
      </p>

      <h2>Late Arrivals</h2>
      <p>
        We ask that you arrive on time for your appointment. If you are running
        late, please call us as soon as possible. If you arrive more than 15
        minutes late, we may need to reschedule your appointment to ensure other
        patients are not affected. In this case, a cancellation fee may apply.
      </p>

      <h2>No-Show</h2>
      <p>
        If you fail to attend your appointment without any prior notice, this
        will be recorded as a no-show. A cancellation fee equivalent to the full
        cost of the appointment or the deposit amount will be charged.
        Persistent no-shows may result in being asked to pay in full at the time
        of booking future appointments.
      </p>

      <h2>Emergencies</h2>
      <p>
        We understand that genuine emergencies can occur. If you need to cancel
        or reschedule due to an emergency, please contact us as soon as you are
        able and we will do our best to accommodate you without penalty.
      </p>

      <h2>Refunds</h2>
      <p>
        Deposits are non-refundable for late cancellations and no-shows. Refunds
        for treatments already commenced will be assessed on a case-by-case
        basis at the discretion of the practice.
      </p>
      <p>
        If DENSTUDIO cancels your appointment, you will be offered an
        alternative appointment at a convenient time or a full refund of any
        deposit paid.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about our booking and cancellation policy,
        please contact us at{" "}
        <a href="mailto:hello@denstudio.co.uk">hello@denstudio.co.uk</a> or
        call us on <a href="tel:02038830588">020 3883 0588</a>.
      </p>
    </LegalPageLayout>
  );
}
