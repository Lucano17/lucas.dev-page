"use client"

import { useEffect } from "react";

export default function MailRedirect() {

  useEffect(() => {
    window.location.href =
      "mailto:lucasdelafuente.dev@gmail.com?subject=(Dígame su asunto)&body=(Dígame su mensaje)";
  }, []);

  return null;
}
