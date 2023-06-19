import "./index.css"; 

function OrderSummary({itemsCount, itemsPrice, totalSavings, subtotal, shipping, additionalService, totalPrice}) {
  return (
    <>
      <div className="or_summary">Summary</div>
      <div className="or_content_right_up">
        <div className="or_content_right_up_item_price">
          <div className="or_items_count">{itemsCount} Items</div>
          <div className="or_items_price">{itemsPrice}€</div>
        </div>
        <div className="or_content_right_up_totalsaving">
          <div className="or_total_saving">Total Savings</div>
          <div className="or_total_saving_value">- {totalSavings}€</div>
        </div>
      </div>
      <div className="or_content_right_middle">
        <div className="or_content_right_middle_subtotal">
          <div className="or_subtotal">Subtotal</div>
          <div className="or_subtotal_value">{subtotal}€</div>
        </div>
        <div className="or_content_right_middle_shipping">
          <div className="or_shipping">Shipping</div>
          <div className="or_shippingl_value">{shipping}€</div>
        </div>
        <div className="or_content_right_middle__additional_service">
          <div className="or_summary_additional_service">
            Additional Service
          </div>
          <div className="or_summary_additional_servicel_value">{additionalService}€</div>
        </div>
      </div>
      <div className="or_content_right_bottom">
        <div className="or_totalprice">
          <div className="or_totalprice_up">Total Price</div>
          <div className="or_totalprice_bottom">
            (incl. VAT, plus shipping costs)
          </div>
        </div>
        <div className="or_content_right_bottom_value">
          <div className="or_totalprice_value">{totalPrice}€</div>
        </div>
      </div>
      <div className="or_pay">Pay with PayPal</div>
    </>
  );
}

export default OrderSummary
