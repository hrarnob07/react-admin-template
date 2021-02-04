import React from "react";
import { Link } from "react-router-dom";
import { cyan, pink, purple, orange } from "@material-ui/core/colors";
import Assessment from "@material-ui/icons/Assessment";
import Face from "@material-ui/icons/Face";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import InfoBox from "../components/dashboard/InfoBox";
import NewOrders from "../components/dashboard/NewOrders";
import MonthlySales from "../components/dashboard/MonthlySales";
import BrowserUsage from "../components/dashboard/BrowserUsage";
import RecentlyProducts from "../components/dashboard/RecentlyProducts";
import  { useState, useEffect } from "react";
import globalStyles from "../styles";
import Grid from "@material-ui/core/Grid";
import {getPost} from "../services/TestServices";
import Data from "../data";

const DashboardPage = () => {
  let [response, setResponse] = useState([{body:"abrbob"}]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("arnob");
   getPost().then(res=>{
      console.log("res>>",res.data);
     setResponse(  res.data);
      console.log("response",response);
    }).catch(error=>{
      console.log(error);
    });
  },[page]);
  return (
    <div>

      <Grid container spacing={1}>
        {response.map(value=>{
          return (<Grid item xs={12} sm={6} md={3}>
            <Link to="/table/data" className="button">
              <InfoBox Icon={ShoppingCart} color={pink[600]}  title={value.title} value="1500000" >{value.body}</InfoBox>
            </Link>
          </Grid>)
        })}

      </Grid>


    
    </div>
  );
};

export default DashboardPage;