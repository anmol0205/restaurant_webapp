import React, { useState } from "react";
import ReviewContext from "./ReviewContext";

const ReviewState = ({children}) => {
    const [data, setData] = useState([
        {
          "name": "Anya Sharma",
          "msg": "The creamy tomato dish is heavenly! It's bursting with flavor, and the protein is cooked to juicy perfection. It's definitely become my go-to whenever I order from here. Highly recommend!"
        },
        {
          "name": "Rohan Kapoor",
          "msg": "I recently tried the vibrant green veggie option, and I was blown away! The sauce is rich and comforting, with the perfect amount of heat. The accompanying cheese melts in your mouth. It's a vegetarian delight!"
        },
        {
          "name": "David Miller",
          "msg": "For a true taste of indulgence, you have to try the slow-cooked savory dish. The meat is unbelievably tender, and the sauce is bursting with aromatic spices. It's a soul-warming experience. Perfect with some fluffy flatbread!"
        },
        {
          "name": "Li Wang",
          "msg": "I don't usually go for seafood, but their coconut curry is an exception. The large shrimp are cooked perfectly, and the curry is packed with fresh flavors. It's a delightful combination that will tantalize any seafood lover."
        },
        {
          "name": "Maria Garcia",
          "msg": "If you're looking for something light and refreshing, the chilled yogurt dish is the perfect choice. The crispy bites are bathed in a cool and creamy sauce, with a touch of sweet and tangy chutney. It's an explosion of textures and flavors that's perfect for a hot day."
        },
        {
          "name": "Chris Lee",
          "msg": "I can't rave enough about the fragrant rice dish! The rice is cooked to fluffy perfection, infused with spices and tender pieces of protein. It's a complete meal on its own, and the portions are incredibly generous. A crowd-pleaser for sure!"
        }
      ]
      );


    return (
        <ReviewContext.Provider value={data}>
            {children}
        </ReviewContext.Provider>
    );
};

export default ReviewState;
