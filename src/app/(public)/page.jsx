import FeaturesPage from "@/components/homepage/Features";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import Stats from "@/components/homepage/Stats";

const HomePage = () => {
  return (
    <section >
   


<section className='min-h-screen bg-[url("/assets/images/globe.png")] bg-cover bg-top md:bg-center bg-no-repeat' >

<Hero/>
<Stats/>
</section>
<FeaturesPage/>
 <Footer/>
    </section>
  );
};

export default HomePage;