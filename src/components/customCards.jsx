import { Avatar, Card, CardBody } from '@chakra-ui/react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProductCard({ image, title, feature }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full object-cover h-64"
        />
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="">{feature}</p>
      </CardBody>
    </Card>
  );
}

export function ReviewCard({ image, name, rate, title, review }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <div className="flex flex-col gap-4 items-center">
          <Avatar src={image} size="lg" />
          <p className="text-center font-semibold text-lg">{name}</p>
          <p className="text-center font-medium">{title}</p>
          <p className="text-center text-sm leading-relaxed">"{review}"</p>
        </div>
      </CardBody>
    </Card>
  );
}
