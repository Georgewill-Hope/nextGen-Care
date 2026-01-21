import Form from '@/components/Form';
import Help from '@/components/Help'
import Hero from '@/components/Hero'
import bg from "@/public/assets/align-fingers.jpg"


const contact = () => {
  return (
    <div>
      <Hero image={bg}>
        <h1 className="text-white text-5xl lg:text-7xl font-semibold font-lato underline">
          Contact Us
        </h1>
      </Hero>
      <Form />
   
      <Help />
    </div>
  );
}

export default contact