import Button from "./Button";
import Card from "./Card";
import { CardProps } from "@/utils/_types";

interface CardContainerProps {
  data: CardProps[];
}

const CardContainer: React.FC<CardContainerProps> = ({data}) => {
  return (
    <section className="bg-gray-100 py-20 lg:py-28">
      <div className="container-width flex flex-col gap-20">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
