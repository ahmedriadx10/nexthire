import FeaturesPage from "@/components/homepage/Features";
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
 
    </section>
  );
};

export default HomePage;