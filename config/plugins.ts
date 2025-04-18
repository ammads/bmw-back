module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST'), // e.g., smtp.gmail.com
          port: env.int('SMTP_PORT'),
          auth: {
            user: env('SMTP_USER'),
            pass: env('SMTP_PASS'),
          },
          // Additional nodemailer options
        },
        settings: {
          defaultFrom: 'admin@bmwmdz.com',
          defaultReplyTo: 'admin@bmwmdz.com',
        },
      },
    },
  });
  