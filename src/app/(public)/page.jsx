import Hero from "@/components/homepage/Hero";
import Stats from "@/components/homepage/Stats";

const HomePage = () => {
  return (
    <section className='min-h-screen bg-[url("/assets/images/globe.png")] bg-cover bg-center bg-no-repeat'>
   
<Hero/>
<Stats/>
 
    </section>
  );
};

export default HomePage;