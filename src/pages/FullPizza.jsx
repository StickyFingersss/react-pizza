import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://64bf90170d8e251fd11105e3.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <h1>Загрузка!</h1>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium pariatur corporis
        voluptatem vitae asperiores repellendus? Ea doloremque officiis temporibus delectus
        repudiandae optio quos mollitia obcaecati voluptatum? Dicta cum possimus adipisci!
      </p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};
