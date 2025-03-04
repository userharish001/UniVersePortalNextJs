"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLabelImportant } from "react-icons/md";

const Footer = ({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2, // Duration of the animation in seconds
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}) => {
  let randomNumber = Math.floor(Math.random() * 1000 + 1);
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  // Calculate damping and stiffness based on duration
  const damping = 20 + 40 * (1 / duration); // Adjust this formula for finer control
  const stiffness = 100 * (1 / duration); // Adjust this formula for finer control

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Set initial text content to the initial value based on direction
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  // Start the animation when in view and startWhen is true
  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === "function") {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  // Update text content with formatted number on spring value change
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const options = {
          useGrouping: !!separator,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          latest.toFixed(0)
        );

        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator]);

  return (
    <div className="bg-black text-white">
      {/* Social Media Links */}
      <div className="flex justify-center gap-3 py-3">
        <Link href="#" className="hover:text-blue-600 text-2xl"><FaFacebook /></Link>
        <Link href="#" className="hover:text-blue-600 text-2xl"><FaTwitter /></Link>
        <Link href="#" className="hover:text-red-600 text-2xl"><FaInstagramSquare /></Link>
        <Link href="#" className="hover:text-red-600 text-2xl"><FaYoutube /></Link>
        <Link href="#" className="hover:text-red-600 text-2xl"><MdEmail /></Link>
      </div>

      {/* Quick Links, MDU Portals, and Important Links */}
      <div className="flex flex-col md:flex-row justify-between px-4 gap-8 py-6">
        {/* Quick Links */}
        <div className="flex-1">
          <ul className="py-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              Quick Links <MdLabelImportant />
            </h2>
            {[
              "Home", "Online Links", "Forms", "Student Corner", "LMS Portal", "Seminar/Conference/Workshop",
              "Policies", "Advertisement", "Associations/Council", "Contact Us", "Online Reappear Form Links",
              "Union of India", "Haryana Sarkar (Acts)", "Pay Fee Online through SB Collect", "Admission Helpdesk- MDU",
              "Admission Helpdesk- CPAS MDU", "MDU Email", "Admission Helpdesk -Foreign Students", "Mobile App Privacy Policy"
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link href="#" className="hover:text-blue-300 text-sm md:text-base">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MDU Portals */}
        <div className="flex-1">
          <ul className="py-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              MDU Portals <MdLabelImportant />
            </h2>
            {[
              "NAAC", "Journals", "DSW", "Syllabi", "Tenders", "NIRF", "IQAC",
              "Faculty Development Centre--Malaviya Mission Training Centre",
              "Department Of Alumni Relations", "GIAN", "Anti Sexual Harassment Cell",
              "Prevention Caste Based Discrimination", "Human Ethics Committee",
              "Centre for Innovation, Incubation & Entrepreneurship", "Administrative Staff College"
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link href="#" className="hover:text-blue-300 text-sm md:text-base">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div className="flex-1">
          <ul className="py-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              Imp. Links <MdLabelImportant />
            </h2>
            {[
              "Search Panel", "Exam Notification", "Admission", "Notices", "Datesheet", "Result Gazette",
              "Sports", "RTI", "E-Repository", "Anti-Ragging Committee", "Term & Conditions/Disclaimer",
              "UGC", "AICTE", "PCI", "BCI", "Mechanism for Redressing Grievances of Students", "MoE"
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link href="#" className="hover:text-blue-300 text-sm md:text-base">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Notice */}
      <p className="text-center py-1 text-sm md:text-base">
        Copyright © 2025 UniVersePortal. All rights Reserved
      </p>
      <p className="text-center py-3 text-sm md:text-base px-4">
        This Logo is property of the Website. If anyone uses the Website Logo without written permission in any form, fully or partially, they can face Legal Consequences.
      </p>

      {/* Online Users and Developer Info */}
      <div className="bg-gray-800 text-center py-3">
        <p className="text-sm md:text-base">Total Online Users: <span className={`${className}`} ref={ref} />+ <span>({randomNumber})</span></p>
        <p className="text-sm md:text-base">Designed & Developed By: Harish (M.Sc Computer Science)</p>
      </div>
    </div>
  );
};

export default Footer;