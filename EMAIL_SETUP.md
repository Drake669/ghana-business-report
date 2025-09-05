# Email Setup Guide

## Prerequisites

1. **Gmail Account**: You need a Gmail account to send emails
2. **App Password**: You need to generate an app-specific password for your Gmail account

## Setup Steps

### 1. Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification"
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the generated password (it will be 16 characters)

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Database (you should already have these)
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
DIRECT_URL="postgresql://username:password@localhost:5432/your_database"

# Gmail Configuration for Nodemailer
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="your-16-character-app-password"
```

### 3. Important Notes

- **Never commit your `.env.local` file** to version control
- The app password is different from your regular Gmail password
- Make sure 2-Step Verification is enabled on your Google account
- The email will be sent from your Gmail address

### 4. Testing

After setting up the environment variables:

1. Restart your development server
2. Try signing up for the waitlist with a valid email
3. Check your email for the welcome message
4. Check the console for any error messages

### 5. Troubleshooting

If emails are not sending:

1. Verify your GMAIL_USER and GMAIL_APP_PASSWORD are correct
2. Check that 2-Step Verification is enabled
3. Ensure the app password was generated for "Mail"
4. Check the server console for error messages
5. Verify your Gmail account doesn't have any restrictions

## Security Considerations

- App passwords are more secure than using your main password
- Each app password is unique and can be revoked individually
- Never share your app password
- Consider using environment-specific email accounts for production
