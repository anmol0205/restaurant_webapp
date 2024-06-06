import React, { useState } from "react";
import FoodContext from "./FoodContext";

const FoodState = ({children}) => {
    const [data, setData] = useState([
        {
            'img':'https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/PGCM2B/delicious-penne-pasta-with-red-lobster-meat-tomatoes-and-fresh-herbs-close-up-on-a-plate-on-a-table-horizontal-PGCM2B.jpg',
            'name':'Pasta',
            'price':'340',
            'rating':'4.5'
        },
        {
            'img':'https://th.bing.com/th/id/OIP.LdCKJqm9E8zkrVmF47hgpgHaFj?rs=1&pid=ImgDetMain',
            'name':'Grilled Chicken Salad',
            'price':'450',
            'rating':'4.6'
        },
        {
            'img':'https://thumbs.dreamstime.com/b/spaghetti-pasta-cooked-dried-tomatoes-spinach-close-up-plate-horizontal-spaghetti-pasta-cooked-dried-tomatoes-159744890.jpg',
            'name':'Spaghetti',
            'price':'350',
            'rating':'3.8'
        },
        {
            'img':'https://thumbs.dreamstime.com/b/pizza-salami-pepperoni-peppers-table-horizontal-tomatoes-close-up-53700106.jpg',
            'name':'Pepperoni Special Pizza',
            'price':'500',
            'rating':'4.9'
        },
        {
            'img':'https://www.thespruceeats.com/thmb/DXZoAJoKTPS7BKEyk4H-Gw3puhc=/6016x4016/filters:fill(auto,1)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg',
            'name':'Steam Paneer Momos',
            'price':'250',
            'rating':'4.6'
        },
        {
            'img':'https://th.bing.com/th/id/OIP.AyGtgKmjWecNKSl-kKEZ0AAAAA?rs=1&pid=ImgDetMain',
            'name':'Butter Chicken',
            'price':'600',
            'rating':'4.8'
        },
        {
            'img':'https://th.bing.com/th/id/OIP.zpsqaKZPl4loD4Uq276rhAHaFR?rs=1&pid=ImgDetMain',
            'name':'Caesar Salad',
            'price':'300',
            'rating':'4.2'
        },
        {
            'img':'https://th.bing.com/th/id/OIP.73ErDe_Ql3vZz1Bd_CCM0wHaE7?rs=1&pid=ImgDetMain',
            'name':'Smoothie Bowl',
            'price':'200',
            'rating':'4.7'
        },
        {
            'img':'https://th.bing.com/th/id/OIP.7HA2o6OV3i1ECgpavLZuRwAAAA?rs=1&pid=ImgDetMain',
            'name':'Chocolate Chip Cookies',
            'price':'150',
            'rating':'4.9'
        },
        {
            'img':'https://hips.hearstapps.com/hmg-prod/images/190319-eggs-benedict-horizontal-071-1553030422.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*',
            'name':'Egg Benedict',
            'price':'400',
            'rating':'4.3'
        }
    ]);
    


    return (
        <FoodContext.Provider value={data}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodState;
