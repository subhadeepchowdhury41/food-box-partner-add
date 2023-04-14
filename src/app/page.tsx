

import RestaurantBuilder from "./sections/restaurant_builder";
import RestaurantForm from "./sections/restaurant_form";

export default function Home() {

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      backgroundColor: '#eaeaea',
      justifyContent: 'center'
    }}>
      <RestaurantForm/>
    </div>
  )
}


