import React from 'react';
import { clients } from '../constans';
import styles from '../style';


function Client() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:*:min-w-[190px] min-w-[100px]`}>
            <img src={client.logo} alt="client"  className='sm:w-[190px] w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Client
