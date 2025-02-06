const HeroSection = () =>{
   return( 
   <main className="hero container">
      <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="hero-btn">
            <button >Shop Now </button>
            <button className="secondary">Category </button>   
         </div>
      <div className="Shopping">
            <span>Also Available on</span>
            <div className="brand-icons">
               <img src="/images/shops.png" alt="shops" />
            </div>   
         </div>
         </div>
      <div className="hero-image"></div>
      <img src="/images/shoe_image.png" alt="shops" />
   </main>
   
   );
};

export default HeroSection;