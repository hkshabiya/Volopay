import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from './Card';

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
    console.log(filteredArray);

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
    cardType:""
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
  const fetchData = async (reset=false) => {
    setLoading(true);
    var result = getCardData(props.type, page, 10, filter.cardName, filter.cardType)
    if (reset) {
        setData(result.data);
    }else{
        setData(prevData => [...prevData, ...result.data]);
    }
    console.log(data);
    setLoading(false);
    setHasMore(result.data.length > 0);
  };
  useEffect(() => {
    fetchData();
  }, [page]);


  useEffect(() => {
    fetchData(true)
  }, [props.type]);

  const handletChange = (event) => {
    setFilter({...filter,[event.target.name]:event.target.value});
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
          <div className='row justify-content-end'>
              <div className='col-2'>
                  <select name='cardType' value={filter.cardType} onChange={handletChange}>
                      <option selected value="">Select Card Type</option>
                      <option value="burner">Burner</option>
                      <option value="subscription">Subscription</option>
                  </select>
              </div>
              <div className='col-2'>
                    <input name='cardName' onChange={handletChange} placeholder='Card Name'></input>
              </div>
              <div className='col-3 text-center'>
                    <button className='btn btn-primary' onClick={()=>fetchData(true)}>Search</button>
              </div>
          </div>
      {!loading && data.map((card, index) => (
        <div key={index+card.name} ref={index === data.length - 1 ? lastCardRef : null}>
            <Card cardData={card}></Card>
        </div>
      ))}
    </div>
  );
};

export default CardList;
