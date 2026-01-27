import { FaPeopleCarry } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";

const Impact = () => {
  return (
    <section className="w-full bg-custom-orange dark:bg-black py-20 lg:py-10">
      <div className="container-width items-center-between flex-col lg:flex-row gap-14">
        <div className="perfectCenter flex-col">
          <IoPeopleSharp size={40} />
          <p className="font-mono text-5xl font-semibold flex items-start">
            <span className="text-4xl font-bold">50</span>,3
            <span className="text-4xl font-bold">37</span>
          </p>
          <p className="font-sans tracking-widest">
            Children Directly Supported
          </p>
        </div>
        <div className="perfectCenter flex-col">
          <FaPeopleCarry size={40} />
          <p className="font-mono text-5xl font-semibold flex items-start">
            <span className="text-4xl font-bold">32</span>,8
            <span className="text-4xl font-bold">08</span>
          </p>
          <p className="font-sans tracking-widest">
            Social Workforce Trained
          </p>
        </div>
        <div className="perfectCenter flex-col">
          <IoIosPeople size={50} />
          <p className="font-mono text-5xl font-semibold flex items-start">
            <span className="text-4xl font-bold">10</span>,3
            <span className="text-4xl font-bold">11</span>
          </p>
          <p className="font-sans tracking-widest">
            Families Directly Supported
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
