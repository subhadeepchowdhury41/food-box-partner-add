

import Button from "@/components/Button";
import DataCard from "@/components/DataCard";
import { useFormContext } from "@/providers/form_provider";
import { Counter, FoodItem } from "@/types/types";
import { useState } from "react";

const RestaurantBuilder = () => {
    const { counters, setCounters } = useFormContext();

    return (
        <div style={{
            backgroundColor: 'white',
            minWidth: '600px',
            alignSelf: 'center',
            padding: '1em'
        }}>
            <div style={{
          color: '#0e0e0e',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: '3em',
        }}>
          Configure
        </div>
        <div style={{
          color: '#0e0e0e',
          fontWeight: 'lighter',
          fontSize: '2em'
        }}>
          Your Restaurant
        </div>
        <div style={{
          margin: '1em 0'
        }}></div>
        <div className="my-5">
            {counters.map((counter, index) => {
                return (<div key={index} className="my-3 p-3 rounded-sm border border-gray-600">
                    <DataCard label="Counter Name" value={counters[index].name ?? `Counter ${index+1}`} onChange={(event) => {
                        setCounters(prev => {
                            let newCounters = prev.map(c => {
                                if (c.id === counter.id) {
                                    c.name = event.target.value;
                                }
                                return c;
                            });
                            return newCounters;
                        });
                    }} />
                    <div>
                    {counters[index].items.map((item, i) => (<div key={i} className="rounded-sm rounded-s-md bg-gray-100 p-4 my-4">
                        {<div className="m-2 justify-between">
                            <DataCard value={counters[index].items[i].name ?? `Item ${i+1}`} display="inline" label="Name" onChange={(event) => {
                                setCounters(prev => {
                                    let newCounters = prev.map(c => {
                                        if (c.id === counter.id) {
                                          c.items = c.items.map(f => {
                                            if (f.id === item.id) {
                                              f.name = event.target.value;
                                            }
                                            return f;
                                          });
                                        }
                                        return c;
                                    })
                                    return newCounters;
                                });
                            }} />
                        <select name="Type" value={String(counters[index].items[i].type)} onChange={(event) => {
                          setCounters(prev => {
                            let newCounters = prev.map(c => {
                                if (c.id === counter.id) {
                                  c.items = c.items.map(f => {
                                    if (f.id === item.id) {
                                      if (event.target.value === "non-veg") {
                                        f.type = "non-veg";
                                      } else {
                                        f.type = "veg";
                                      }
                                    }
                                    return f;
                                  });
                                }
                                return c;
                            })
                            return newCounters;
                        });
                            }} style={{
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
                            return prev.map(c => {
                              if (c.id === counter.id) {
                                c.items = c.items.filter(f => (f.id !== item.id));
                                c.items.map((f, i) => f.id = i);
                              }
                              return c;
                            });
                          });
                            
                          }}/>
                            
                        </div>}
                        <DataCard value={counters[index].items[i].description} multiline label="Description" onChange={(event) => {
                            setCounters(prev => {
                              let newCounters = prev.map(c => {
                                  if (c.id === counter.id) {
                                    c.items = c.items.map(f => {
                                      if (f.id === item.id) {
                                        f.description = event.target.value;
                                      }
                                      return f;
                                    });
                                  }
                                  return c;
                              })
                              return newCounters;
                          });
                        }} />
                    </div>))}
                    </div>
                        
                    <div className="m-6"/>
                    <Button label="Delete Counter" onClick={() => {
                        setCounters(
                            prev => prev.filter(c => c.id !== counter.id)
                        );
                        }} />
                    <div className="inline m-2"/>
                    <Button label="Add Food Item" onClick={() => {
                        setCounters(
                          prev => {
                            let newCounters: Counter[] = [];
                            prev.forEach(c => {
                              if (c.id === counter.id) {
                                c.items.push({
                                  id: c.items.length
                                });
                              }
                              newCounters.push(c);
                              console.log(newCounters);
                              
                            });
                            return newCounters;
                          }
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
        </div>
    );
}

export default RestaurantBuilder;