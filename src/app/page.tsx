import React from "react"

import AboutUs from "@/pages/AboutUs"
import HomePage from "@/pages/Home"
import Trainers from "@/pages/Trainers"
import WhyChooseUs from "@/pages/WhyChooseUs"
import Testimonials from "@/pages/Testimonials"
import CTA from "@/pages/CTA"

export default function Home() {
  return (
    <>
      <HomePage />

      <WhyChooseUs />

      <AboutUs />

      <Trainers />

      <Testimonials />

      <CTA />
    </>
  )
}
