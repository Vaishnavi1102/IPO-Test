import React, { useState } from 'react';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {

      id: 1,
      question: "What is an IPO?",
      answer:"An IPO (Initial Public Offering) is the process by which a private company offers its shares to the public for the first time to raise capital."
    },
    {
      id: 2,
      question: "How to Subscribe to an IPO?",
      answer: "Step 1: Login to your respective service provider. Step 2: Click on the IPO button. Step 3: Select the IPO you want to bid and enter the relevant details. Step4: Your subscription will be completed once you make the payment or give permission."
    },
    {
      id: 3,
      question: "Should I buy an IPO first day?",
      answer: "You should only buy an IPO on the first day if you've researched the company, believe in its long-term growth, and are prepared for short-term price volatility."
    },
    {
      id: 4,
      question: "How do you know if an IPO is good?",
      answer: "You can tell an IPO is good by analyzing the company's financial health, growth potential, competitive position, IPO valuation, promoter reputation, and investor demand (like oversubscription or GMP trends)."
    },
    {
      id: 5,
      question: "How to check IPO start date?",
      answer: "You can check an IPO's start date on official stock exchange websites like NSE India or BSE India, or through financial platforms like Zerodha, Groww, Angel One, or Moneycontrol under the IPO section."
    },
    {
      id: 6,
      question: "What is the minimum investment in an IPO?",
      answer: "Minimum investment usually depends on the lot size of the IPO. For example, if the lot size is 50 shares at ₹100 each, the minimum investment would be ₹5,000."
    },
    {
      id: 7,
      question: "What is a price band?",
      answer: "A price band is the range within which investors can bid for shares during a book-building IPO. The final price is decided based on demand."
    },
    {
      id: 8,
      question: "Is investing in IPOs risky?",
      answer: "Yes, like any stock market investment, IPOs carry risks. The share price may fall after listing depending on market conditions."
    },
    {
      id: 9,
      question: "What is the role of SEBI in an IPO?",
      answer: "SEBI (Securities and Exchange Board of India) regulates and approves IPOs to protect investor interests and ensure transparency."
    },
    {
      id: 10,
      question: "What is the lock-in period for IPO shares?",
      answer: "For general investors, there’s usually no lock-in period, but anchor investors or promoters may have a lock-in period post-listing."
    },
    {
      id: 11,
      question: "Can IPOs be oversubscribed?",
      answer: "Yes, IPOs can be oversubscribed when demand exceeds the number of shares available. In such cases, allotment is done through a lottery system."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div style={{ 
      marginTop: '164px',
      marginBottom: '32px',
      width: '1784px'
    }}>
      {/* FAQ Header */}
      <div className="mb-12">
        <h2 className="text-black font-medium mb-4" style={{
          fontSize: '40px',
          lineHeight: '60px',
          fontFamily: 'Poppins'
        }}>
          Frequently Asked Questions?
        </h2>
        <p className="text-black font-normal" style={{
          fontSize: '24px',
          lineHeight: '36px',
          fontFamily: 'Poppins',
          maxWidth: '887px'
        }}>
          Find answers to common questions that come in your mind related to IPO.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg backdrop-blur-figma"
            style={{
              width: '1774px',
              minHeight: '181px',
              padding: '43px 72px'
            }}
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <h3 className="text-black font-semibold" style={{
                fontSize: '30px',
                lineHeight: '45px',
                fontFamily: 'Poppins',
                maxWidth: '901px'
              }}>
                {faq.question}
              </h3>
              <span 
                className="text-blue-600 font-semibold select-none"
                style={{
                  fontSize: '48px',
                  lineHeight: '72px',
                  fontFamily: 'Poppins',
                  width: '44px',
                  height: '96px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {openFaq === faq.id ? '−' : '+'}
              </span>
            </div>
            
            {/* Expanded Answer */}
            {openFaq === faq.id && faq.answer && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-black font-semibold" style={{
                  fontSize: '24px',
                  lineHeight: '36px',
                  fontFamily: 'Poppins',
                  maxWidth: '1150px'
                }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
