import React from "react";
import "./purchases.scss";
import PurchasesItem from "../PurchasesItem/PurchasesItem";
import {
  purchasesFormItems as formArray,
  purchasesItems,
} from "../../Store/store";
import PurchasesFormItem from "../PurchasesFormItem/PurchasesFormItem";
const Purchases = () => {
  const renderPurchases = () => {
    return purchasesItems.map((item, index) => {
      return <PurchasesItem key={index} {...item} />;
    });
  };

  const purchasesFormItems = () => {
    return formArray.map((item, index) => {
      return <PurchasesFormItem key={index} {...item} />;
    });
  };

  return (
    <section className="purchases">
      <div className="purchases__wrapper container">
        <div className="purchases__info">
          <h2>
            Control <span>Purchases</span> <br /> Via Dashboard
          </h2>
          <div className="purchases__items">{renderPurchases()}</div>
        </div>
        <div className="purchases__data">
          <div className="purchases__form">
            <div className="purchases__form_header">
              <h3>Purchases</h3>
              <select name="" id="">
                <option value="">This month</option>
                <option value="">This eyar</option>
              </select>
            </div>
            <div className="purchases__form__items">{purchasesFormItems()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchases;
