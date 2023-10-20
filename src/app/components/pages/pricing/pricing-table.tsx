import PricingCard from "./pricing-card"



function Pricing() {
  return (
    <div>
      <div className="max-w-screen-xl py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
      <PricingCard></PricingCard>  
      <PricingCard></PricingCard>  
      <PricingCard></PricingCard>  
    </div>
    </div>
    </div>
  )
}

export default Pricing 

