import React, { useEffect, useState } from "react";
import { Add, Close } from "@material-ui/icons";
import axios from "axios";

import "./Scss/FAQ.scss";

const FAQ = ({ english, russian, uzbek }) => {
  const [Faq, setFaq] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-mixinfo.abba.uz/faqs/")
      .then(({data}) => {
        // console.log(data, "res");
        setFaq(data);
      })
      .catch((err) => {
        
        console.log(err, "err");
      });
  }, []);

  const dataFAQ = [
    {
      id: 1,
      name_uz: "Alright, but what exactly do you do?",
      name_ru: "Хорошо, но что конкретно ты делаешь?",
      name_en: "Alright, but what exactly do you do?",
      description_uz:
        "Menga brend strategi kerak emas, lekin yaqinlashib kelayotgan kampaniyani amalga oshirishda yordam kerak. Hali ham birga ishlay olamizmi?",
      description_en:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_ru:
        "Menga brend strategi kerak emas, lekin yaqinlashib kelayotgan kampaniyani amalga oshirishda yordam kerak. Hali ham birga ishlay olamizmi?",
      description_ru:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      id: 2,
      name_uz: "Alright, but what exactly do you do?",
      name_ru: "Alright, but what exactly do you do?",
      name_en: "Alright, but what exactly do you do?",
      description_uz:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_en:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_ru:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      id: 3,
      name_uz: "Alright, but what exactly do you do?",
      name_ru: "Alright, but what exactly do you do?",
      name_en: "Alright, but what exactly do you do?",
      description_uz:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_en:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_ru:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      id: 4,
      name_uz: "Alright, but what exactly do you do?",
      name_ru: "Alright, but what exactly do you do?",
      name_en: "Alright, but what exactly do you do?",
      description_uz:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_en:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      description_ru:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
  ];

  return (
    <div className="FAQ">
      <div className="wrapper">
        <div className="col-md-12 main">
          {Faq.map((data, index) => (
            <div className="col-md-12 one" key={index}>
              <input type="checkbox" name="" id={`faq${data.id + 1}`} />
              <label className="col-md-12" htmlFor={`faq${data.id + 1}`}>
                <div className="col-1">
                  <h2>0{index+1}</h2>
                </div>
                <div className="col-10">
                  <h3 className="title">
                    {english && data.question_en} {russian && data.question_ru}{" "}
                    {uzbek && data.question_uz}
                  </h3>
                  <p className="answer">
                    {english && data.answer_en}{" "}
                    {russian && data.answer_ru}{" "}
                    {uzbek && data.answer_uz}
                  </p>
                </div>
                <div className="col-1">
                  <Add className="open" />
                  <Close className="close" />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
