// How to use client side

import { useEffect, useState } from "react";

interface salesType {
  id: string;
  username: string;
  volume: number;
}

const LastSalesPage = () => {
  const [sales, setSales] = useState<salesType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://house-course-63ea4-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        type Transform = {
          id: string;
          username: string;
          volume: number;
        }[];
        const transformedSales: Transform = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet here!</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
