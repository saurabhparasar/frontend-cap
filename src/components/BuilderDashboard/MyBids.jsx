import React from "react";
import MyBidCard from "../Cards/MyBidCard";

const MyBids = () => {
  return (
    <div style={({ width: 1100 }, { marginLeft: 10 })}>
      <h1> My Bids </h1>
      <MyBidCard />
    </div>
  );
};

export default MyBids;
