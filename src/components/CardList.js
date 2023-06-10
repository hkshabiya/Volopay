import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from './Card';
import { type } from '@testing-library/user-event/dist/type';
const OWNER_ID = 1 // Assuming owner id is 1

function getCardData(type, page=0, noCardsPerPage=10, cardName=null, cardType=null) {
    var cardData = [
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

    var startIndex = page*noCardsPerPage
    var endIndex = startIndex+noCardsPerPage
    if(cardName){
        cardData = cardData.filter((element)=>{
            return element.name.toLocaleLowerCase()==cardName.toLocaleLowerCase()
        })
    }
    if(cardType){
        cardData = cardData.filter((element)=>{
            return element.card_type.toLocaleLowerCase()==cardType.toLocaleLowerCase()
        })
    }
    console.log(type);
    if (type=='your') {
        cardData = cardData.filter((element)=>{
            return element.owner_id==OWNER_ID
        })
    }
    if (type=='blocked') {
        cardData = cardData.filter((element)=>{
            return element.status=='blocked'
        })
    }
    const filteredArray = cardData.filter((element, index) => {
        return index >= startIndex && index < endIndex;
      });
    return {
        data:filteredArray,
        per_page:noCardsPerPage,
        total:cardData.length
    }
}

const CardList = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [filter, setFilter] = useState({
    cardName:null,
    cardType:null
  });
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
  const fetchData = async () => {
    const result = getCardData(props.type, page, 10, filter.cardName, filter.cardType)
    console.log(result);
    if(filter.cardName || filter.cardType){
      setData(result.data)
    }else{
      setData(prevData => [...prevData, ...result.data]);
  }
    setLoading(false);
    setHasMore(result.data.length > 0);
  };
  useEffect(() => {
    

    fetchData();
  }, [page, filter, props.type]);

  useEffect(() => {
    setData([])
    fetchData()
  }, [props.type]);

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
