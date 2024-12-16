import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <div id="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.form} method='post' action="https://getform.io/f/raeqrega">
        <label htmlFor="Name">Full name</label>
        <input id='Name' name='Name' className={styles.input} type="text" />

        <label htmlFor="Email">E-mail</label>
        <input id="Email" name='Email' className={styles.input} type="Email" />

        <label htmlFor="Service">Web service you want</label>
        <input id="Service" name='Service' list="options" className={styles.options}/>
          <datalist id="options">
            <option value="Single page" />
            <option value="Multiple pages" />
            <option value="E-commerce" />
            <option value="Blog" />
          </datalist>

        <label htmlFor="Message">Message</label>
        <textarea name="Message" id="Message"></textarea>

        <button type='submit' formTarget='_blank'>Send</button>
      </form>
    </div>
  )
}

