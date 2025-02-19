"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponse("Correo enviado con éxito");
        setFormData({ name: "", email: "", message: "", subject: "" });
      } else {
        setResponse("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error al enviar el mensaje");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="Contact" className={styles.contact}>
      <h2>Contacto</h2>
      <form className={styles.form} method="post" onSubmit={handleSubmit}>
        <label htmlFor="Name">Nombre completo o de la empresa</label>
        <input
          id="Name"
          name="name"
          className={styles.input}
          type="text"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="Email">E-mail</label>
        <input
          id="Email"
          name="email"
          className={styles.input}
          type="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="Service">Motivo de contacto</label>
        <input
          id="Service"
          name="subject"
          list="options"
          className={styles.options}
          onChange={handleChange}
          value={formData.subject}
        />
        <datalist id="options">
          <option value="Single page" />
          <option value="Multiple pages" />
          <option value="E-commerce" />
          <option value="Blog" />
        </datalist>

        <label htmlFor="Message">Mensaje</label>
        <textarea
          name="message"
          id="Message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
        {response && <p className={styles.formResponse}>{response}</p>}
      </form>
    </div>
  );
};
