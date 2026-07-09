"use client";
import { useState } from "react";
import styles from "./BlogFaq.module.css";

const faqs = [
  {
    q: "When will be the Abu Dhabi T10 2026 played?",
    a: "The competition will commence on 7 November 2026 and conclude on 20 November at the Zayed Cricket Stadium in Abu Dhabi."
  },
  {
    q: "What is the T10 cricket?",
    a: "The T10 is the shortest version of the professional cricket where the game involves fifty balls per innings and takes ninety minutes to complete."
  },
  {
    q: "Who won the Abu Dhabi T10 2025?",
    a: "UAE Bulls registered their maiden victory in the competition by defeating the Aspin Stallions by eighty runs in the final."
  },
  {
    q: "How many teams play in the T10 league?",
    a: "There are eight teams that compete in the T10 league. The confirmed T10 league 2026 teams list shall be simultaneously updated when the details surface on the official website."
  },
  {
    q: "Is the Abu Dhabi T10 owned by the government?",
    a: "Yes, the Abu Dhabi Cricket & Sports Hub owns the majority stake in the competition, which is backed by the Abu Dhabi Sports Council and the Emirates Cricket Board."
  },
  {
    q: "Which team has won the most number of T10 titles?",
    a: "The Deccan Gladiators have registered three T10 league titles to their name, the most this season."
  },
  {
    q: "What time will the matches start for Indian viewers?",
    a: "The matches will commence in the evening for Indian viewers as Abu Dhabi is one and a half hours behind IST."
  }
];

export default function BlogFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqWrapper}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
        >
          <div 
            className={styles.faqQuestion} 
            onClick={() => toggleFaq(index)}
          >
            <h3>{faq.q}</h3>
            <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
          </div>
          <div className={styles.faqAnswer}>
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
