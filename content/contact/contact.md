---
# An instance of the Contact widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 10

title: Contact
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  email: 'mailto:Raymond.Chan@singaporetech.edu.sg'
  address:
    street: 172 Ang Mo Kio Avenue 8
    city: Singapore
    postcode: '567739'
  directions: Enter SIT NYP Campus and take the lift toon Floor 2
  office_hours:
    - 'Monday 10:00 to 13:00'
    - 'Wednesday 09:00 to 10:00'
        Singapore Institute Of Technology (sit@nyp), 172 Ang Mo Kio Avenue 8 Singapore 567739
  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

design:
  columns: '1'
---
