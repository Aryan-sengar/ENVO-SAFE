import FAQItem from '../FaqItem/FaqItem';

const Faq = () => {
  const faqs = [
    { question: 'What is the Green Credit Programme?', answer: 'The Green Credit Programme is an initiative in India aimed at incentivizing environmental preservation and sustainable practices by awarding credits for green actions.' },
    { question: 'How can I earn Green Credits?', answer: 'You can earn Green Credits by participating in activities such as tree planting, waste management, energy conservation, and other sustainable practices.' },
    { question: 'How can I track my Green Credits?', answer: 'You can track your Green Credits through our online platform where your contributions and earned credits will be recorded and displayed.' },
    { question: 'What can I do with my Green Credits?', answer: 'Green Credits can be redeemed for rewards, discounts, and other incentives offered by participating organizations and businesses.' },
    { question: 'How can businesses get involved in the Green Credit Programme?', answer: 'Businesses can participate by offering rewards and incentives for Green Credits, or by supporting and promoting sustainable practices within their operations and communities.' },
  ];

  return (
    <section className="bg-white p-8 m-15">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
