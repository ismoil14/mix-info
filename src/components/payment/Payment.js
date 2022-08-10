import React, { useState } from 'react'
import './payment.css'
import { Control, Remove, Submit } from './image/svg'
import Click from './image/click.svg'
import Payme from './image/payme.svg'
import masterCard from './image/masterCard.svg'
import visa from './image/visa.svg'

function Payment() {
  const [compony, setCompony] = useState('')
  const [btnSubmit, setbtnSubmit] = useState(false)
  const paymentSystem = [
    { id: 1, img: Click, alt: 'Click' },
    { id: 2, img: Payme, alt: 'Payme' },
    { id: 3, img: masterCard, alt: 'masterCard' },
    { id: 4, img: visa, alt: 'visa' },
  ]
  return (
    <div className="payment__box">
      <div className="payment">
        <div className="payment__registration">
          <input type="text" placeholder="#654874" />
          <input type="text" placeholder="Sadulla Kobiljonov" />
          <input type="tel" placeholder="+998 99 011 89 34" />
          <div className="states">
            <select>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Russia">Russia</option>
              <option value="Kazakistan">Kazakistan</option>
            </select>
            <select className="region">
              <option value="Toshkent">Toshkent</option>
              <option value="Andijon">Andijon</option>
              <option value="Namangan">Namangan</option>
              <option value="Farg'ona">Farg'ona</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Tamaraxanum 4...."
            className="district"
          />
        </div>
        <div className="payment__right">
          <h4 className="payment__title">Tolov turini tanlang</h4>
          <p className="information__about">
            To'lov tizimi va bank yagona mobil ilovada, web-sahifada va hattoki
            tugmali telefon qurilmalarida
          </p>
          <div className="payment__system">
            {paymentSystem?.map((paymentitems, i) => {
              return (
                <div
                  className={`system ${compony === i ? 'system_active' : ''}`}
                  onClick={() => setCompony(i)}
                  key={paymentitems.id}
                >
                  <img src={paymentitems.img} alt={paymentitems.alt} />
                </div>
              )
            })}
          </div>
          <div className="shamelessness">
            <Control />
            <p>Tolov “xalq banki” tomonidan nazoratda</p>
          </div>
          <div className="payment_submit">
            <div className="btn__remove">
              <p>Отменть оплату</p>
              <Remove />
            </div>
            <div
              className={` ${btnSubmit ? 'btn_submit_active ' : 'btn__submit'}`}
              onClick={() => setbtnSubmit(!btnSubmit)}
            >
              <p>Следущий шаг</p>
              <Submit />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
