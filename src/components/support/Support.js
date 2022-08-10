import React from 'react'
import { Telegram, Massage } from './image/svg'
import './support.css'
function Support() {
  return (
    <div className="support">
      <div className="support__box__item">
        <div className="support__title">Support</div>
        <p className="support__text">Support (Eva Violet)</p>
        <div className="support__massage">
          <div className="support__massage__box">
            <p>
              Xush kelibsiz (sayt nomi) Men Eva Violetman - virtual yordamchi
              qo'llab-quvvatlash xizmatlari. Agar sizda bo'lsa savol - buni
              ushbu chatda so'rang va men beraman Men mamnuniyat bilan javob
              beraman.
            </p>
            <span>12:07</span>
          </div>
          <div className="support__input">
            <div className="input_box">
              <Massage />
              <input type="text" placeholder="Sizning xabaringiz" />
            </div>
            <Telegram />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
