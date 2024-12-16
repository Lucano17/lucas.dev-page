"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      alert("Formulario enviado con éxito!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div id="Contact" className={styles.contact}>
      <h2>Contacto</h2>
      <form
        className={styles.form}
        method="post"
        onSubmit={handleSubmit}
        action="https://getform.io/f/raeqrega"
      >
        <label htmlFor="Name">Nombre completo o de la empresa</label>
        <input id="Name" name="Name" className={styles.input} type="text" />

        <label htmlFor="Email">E-mail</label>
        <input id="Email" name="Email" className={styles.input} type="email" />

        <label htmlFor="Service">Motivo de contacto</label>
        <input
          id="Service"
          name="Service"
          list="options"
          className={styles.options}
        />
        <datalist id="options">
          <option value="Single page" />
          <option value="Multiple pages" />
          <option value="E-commerce" />
          <option value="Blog" />
        </datalist>

        <label htmlFor="Message">Mensaje</label>
        <textarea name="Message" id="Message"></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};