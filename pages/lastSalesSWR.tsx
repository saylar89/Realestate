import { useEffect, useState } from "react";
import useSWR from "swr";
import { GetStaticProps } from "next";

interface salesType {
  id: string;
  username: string;
  volume: number;
}

type SaleProp = {
  sales: {
    id: string;
    username: string;
    volume: number;
  }[];
};

const LastSalesPage2 = (props: SaleProp) => {
  const [sales, setSales] = useState<salesType[]>(props.sales);

  const { data, error } = useSWR(
    "https://house-course-63ea4-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
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
    }
  }, [data]);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
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

// We use getStaticProps because of seo
//because if we just use client side rendering we won't have any data at first time.

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://house-course-63ea4-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

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

  return { props: { sales: transformedSales } };
};

export default LastSalesPage2;
