import Accord from "./Accord";


const Faq = () => {
  return (
    <div className="p-4 rounded-lg w-full  items-center mt-10 overflow-hidden">
      <h3 className="title">Accordion</h3>
      <Accord title="Who can use this FAQ template?"
              answer="This FAQ template is for marketers, business owners and freelancers
               who want to reduce customer service efforts. Swap your standard FAQ section for an engaging
               online form, and make it easier for customers to find what they need."/>

<Accord title="Why use an FAQ template?"
              answer="An FAQ page is a great way to drive traffic to your site, build trust and reduce time spent answering customer queries. And turning your 
              standard FAQ section into an interactive FAQ form just takes it to the next level."/>

<Accord title="What are the main elements of an FAQ template?"
              answer="It’s also good to add images and other engaging elements—that way, they’ll stay on your
               form, whiz through your FAQs and discover more about your product/service."/>

<Accord title="How do you decide what questions to put in your FAQ?"
              answer="The obvious answer that’s surprisingly easy to overlook: what are your customers asking? Check emails, call recordings, 
              messages and comments on social media—basically anywhere you’re interacting with customers."/>
    </div>
  )
}

export default Faq
