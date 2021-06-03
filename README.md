# Webhook

# To run do npm install then npm start

Webhooks are one of a few ways web applications can communicate with each other.It allows you to send real-time data from one application to another whenever a given event occurs.

a webhook is a rest api that connects point A to B on the internet. sends data from unrelated systems.
synchronises the data between different systems.

how it works?
two end points, one to register and save the url and the events to a database.
the second end point is to call the urls based on the right events.

webhooks VS APIs
It’s in how they receive data. With an API, you get data through a process known as “polling.” This is when your application periodically makes a request to an API server to check for new data.
A webhook, on the other hand, allows the provider to send (i.e “push”) data to your application as soon as an event occurs. This is why webhooks are sometimes referred to as “reverse APIs.”
