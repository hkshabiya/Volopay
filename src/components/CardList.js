import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardList = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const result = {
            data: [
                {
                    name: 'Mixmax',
                    budget_name: 'Software subscription',
                    owner_id: 1,
                    spent: {
                        value: 100,
                        currency: "SGD"
                    },
                    available_to_spend: {
                        value: 1000,
                        currency: "SGD"
                    },
                    card_type: "burner",
                    expiry: "9 feb",
                    limit: 100,
                    status: 'active'
                },
                {
                    name: 'Quickbooks’',
                    budget_name: 'Software subscription',
                    owner_id: 2,
                    spent: {
                        value: 50,
                        currency: "SGD"
                    },
                    available_to_spend: {
                        value: 250,
                        currency: "SGD"
                    },
                    card_type: "subscription",
                    limit: 10,
                    status: 'active'
                }
            ],
            page: 1,
            per_page: 10,
            total: 100
        }
      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((card) => (
        <Card cardData={card}></Card>
      ))}
    </div>
  );
};

export default CardList;
