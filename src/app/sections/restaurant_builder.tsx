"use client";

import Button from "@/components/Button";
import DataCard from "@/components/DataCard";
import { useEffect, useState } from "react";

interface FoodItem {
    id: number,
    name?: string,
    description?: string,
    type?: "veg" | "non-veg" | null | undefined
}

interface Counter {
    id: number
    name?: string
    items: FoodItem[]
}

const RestaurantBuilder = () => {
    const [counters, setCounters] = useState<Counter[]>([]);

    useEffect(() => {
        console.log(counters);
        
    },[counters]);
    return (
        <div className="my-5">
            {counters.map((counter, index) => {
                return (<div key={index} className="my-3 p-3 rounded-sm border border-gray-600">
                    <DataCard label="Counter Name" value={counters[index].name ?? `Counter ${index+1}`} onChange={(event) => {
                        setCounters(prev => {
                            let newCounters : Counter[] = [];
                            prev.forEach((c) => {
                                if (c.id === counter.id) {
                                    c.name = event.target.value;
                                }
                                newCounters.push(c);
                            });
                            return newCounters;
                        });
                    }} />
                    <div>
                    {counters[index].items.map((item, i) => (<div key={i} className="rounded-sm rounded-s-md bg-gray-100 p-4 my-4">
                        {<div className="m-2 justify-between">
                            <DataCard value={counters[index].items[i].name ?? `Item ${i+1}`} display="inline" label="Name" onChange={(event) => {
                                setCounters(prev => {
                                    let newCounters : Counter[] = [];
                                    prev.forEach(c => {
                                        let newItems : FoodItem[] = [];
                                        if (c.id === counter.id) {
                                            c.items.forEach(f => {
                                                if (f.id === item.id) {
                                                    f.name = event.target.value;
                                                }
                                                newItems.push(f);
                                            });
                                        }
                                        newCounters.push({
                                            ...c,
                                            items: newItems
                                        });
                                    })
                                    return newCounters;
                                });
                            }} />
                            <select name="Type" style={{
                                margin: '0 1em',
                                backgroundColor: '#eaeaea',
                                lineHeight: '2.3',
                                padding: '0.4em',
                                borderRadius: '5px',
                                borderBottom: '1px solid black'
                            }}>
                                <option value="non-veg">Non-veg</option>
                                <option value="veg">Veg</option>
                            </select>
                            <Button label="Delete" onClick={() => {
                                setCounters(prev => {
                                    let newCounters: Counter[] = [];
                                    prev.forEach((c, i) => {
                                        // if (c.id === counter.id) {
                                        //     newCounters.push(counter.items.filter(f => f.id != item.id));
                                        // } else {
                                            
                                        // }
                                    })
                                    prev[index].items = prev[index].items.filter(f => f.id !== item.id);
                                    return prev;
                                });
                            }}/>
                            
                        </div>}
                        <DataCard value={item.description} multiline label="Description" onChange={() => {}} />
                    </div>))}
                    </div>
                        
                    <div className="m-6"/>
                    <Button label="Delete Counter" onClick={() => {
                        setCounters(
                            prev => {
                                let newList = prev.filter(
                                    counter => counter.id != counters[index].id
                                );
                                newList.map((c, i) => c.id = i);
                                return newList
                            }
                        );
                        }} />
                    <div className="inline m-2"/>
                    <Button label="Add Food Item" onClick={() => {
                        setCounters(
                            prev => prev.map((c, j) => {
                                if (c.id === counters[index].id) {
                                    c.items.push({
                                        id: counters[index].items.length,
                                    });
                                }
                                return c;
                            })
                        );
                    }}/>
                </div>)
            })}
            <div>
            <Button label="Add Counter" onClick={() => {
                setCounters(prev => [...prev, {
                    id: counters.length,
                    items: []
                }]);
            }}/>
            </div>
        </div>
    );
}

export default RestaurantBuilder;