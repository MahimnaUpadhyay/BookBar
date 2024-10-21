import React from 'react'
import HeroSection from './HomePageComponent/HeroSection'
import FeatureBooksSection from './HomePageComponent/FeatureBooksSection'
import TestimonialSection from './HomePageComponent/TestimonialSection'
import PricingSection from './HomePageComponent/PricingSection'
import ContactUsForm from '@/app/components/ContactUsForm'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <FeatureBooksSection />
        <TestimonialSection />
        <PricingSection />
        <ContactUsForm />
    </>
  )
}

export default HomePage