import "./index.css";
import { Collapse } from "antd";
const { Panel } = Collapse;
function Page() {
  const faqs = [
    {
      question: "What is Nutri-score?",
      answer:
        "Nutri-Score translates the nutritional quality of a product into a five-letter code (A, B, C, D, and E), while A represents the best nutritional quality, and E represents the worst nutritional quality. It does not categorize food into healthy and unhealthy. However, it offers customers a possibility to compare the nutritional quality of foods in the same categories. The score is based on a continuous and discrete scale ranging from +40 (least healthy) to -15 (most healthy). While energy, total sugar, saturate fat and sodium score lead to negative points, fruit and vegetables, nuts and legumes, protein and fibre score account for positive points.",
    },
    {
      question: "Why use Nutri-score as the indicator?",
      answer:
        "Its purpose is to offer consumers transparency on the overall nutritional quality of prepackaged foods, allowing them, within a few seconds of the purchase act, to recognize and compare the nutritional quality of foods and guide their choices towards better alternatives.",
    },
    {
      question:
        "Why is it recommended to consume foods with low fat/sugar/salt content?",
      answer:
        "A high consumption of fat can raise cholesterol, which increases the risk of heart diseases. A high consumption of sugar can cause weight gain and tooth decay. It also augments the risk of type 2 diabetes and cardio-vascular diseases. A high consumption of salt (or sodium) can cause raised blood pressure, which can increase the risk of heart disease and stroke.",
    },
    {
      question: "Can I only pay with paypal?",
      answer: "Yes, currently, paypal is the only payment method.",
    },
    {
      question: "How do I request a refund?",
      answer: "If you would like to request a refund for your purchase, please contact us at HealthFuel365@gmail.com with your order details and the reason for the refund. Our customer support team will be happy to assist you with the process.",
    },
    {
      question: "How long does it take to process a refund?",
      answer: "Refunds are typically processed within 3-5 business days after the return is received and inspected.",
    },
  ];
  return (
    <div className="faq">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIconPosition="end"
      >
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index + 1}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
export default Page;
