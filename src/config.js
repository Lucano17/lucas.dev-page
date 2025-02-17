export const env = {
    emailUser: (process.env.EMAIL_USER || ""),
    emailPassword: (process.env.EMAIL_PASS || ""),
    emailHost: (process.env.EMAIL_HOST || "smtp.gmail.com"),
    emailPort: (process.env.EMAIL_PORT = 465),
  };