import Cover from "../../shared/Cover/Cover";
import coverImage from "../../../assets/shop/banner2.jpg";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories=['salad','pizza','soup','desserts','drinks']
   // path er last path ta debe 
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    console.log(category,initialIndex)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
 
    const salads = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soups = menu.filter((item) => item.category === "soup");
    const desserts = menu.filter((item) => item.category === "dessert");
    const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
        <Helmet>
        <title>Bistro Boss/Order Food </title>
      </Helmet>
      <Cover bgImage={coverImage} tittle="Order Food"></Cover>
      <Tabs className="mt-8" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad </Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel> <OrderTab items={salads}></OrderTab> </TabPanel>
        <TabPanel> <OrderTab items={pizza}></OrderTab> </TabPanel>
        <TabPanel> <OrderTab items={soups}></OrderTab> </TabPanel>
        <TabPanel> <OrderTab items={desserts}></OrderTab> </TabPanel>
        <TabPanel> <OrderTab items={drinks}></OrderTab> </TabPanel>
      
      </Tabs>
    </div>
  );
};

export default Order;
