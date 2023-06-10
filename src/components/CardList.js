import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from './Card';
const OWNER_ID = 1 // Assuming owner id is 1

function getCardData(type, page=0, noCardsPerPage=10) {
    var cardData = {
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },
        ]
    }
    var startIndex = page*noCardsPerPage
    var endIndex = startIndex+noCardsPerPage
    const filteredArray = cardData.data.filter((element, index) => {
        return index >= startIndex && index < endIndex;
      });
    return {
        data:filteredArray,
        per_page:noCardsPerPage,
        total:cardData.data.length
    }
}

const CardList = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const observer = useRef();

  const lastCardRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    const fetchData = async () => {
        console.log(page);
      const result = getCardData(props.type, page)
      setData(prevData => [...prevData, ...result.data]);
      setLoading(false);
      setHasMore(result.data.length > 0);
    };

    fetchData();
  }, [page]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((card, index) => (
        <div key={index} ref={index === data.length - 1 ? lastCardRef : null}>
            <Card cardData={card} ></Card>
        </div>
      ))}
    </div>
  );
};

export default CardList;
