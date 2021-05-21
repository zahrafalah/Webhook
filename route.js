const router = require("express").Router();

const events = {
  cycle: {
    new: "cycle.new",
    update: "cycle.update",
    delete: "cycle.delete",
  },
  list: {
    new: "list.new",
    update: "list.update",
    delete: "list.delete",
  },
};

const domainsToEvents = {};

router.post("/event", (req, res) => {
  const eventType = req.body.eventType;
  // When an event comes in, check the event type, and send the event to the domains associated to it.
  console.log("incoming event type: ", eventType);

  for (const [domain, eventsList] of Object.entries(domainsToEvents)) {
    if (eventsList.includes(eventType)) {
      // pretend to ssend request
      console.log("Sending event to registered domain: ", domain);
    }
  }

  res.status(201).send();
});

router.post("/register", (req, res) => {
  const domain = req.body.domain;
  const events = req.body.events;
  if (!domainsToEvents[domain]) {
    domainsToEvents[domain] = events;
  }
  console.log(domainsToEvents);
  res.status(201).send();
});

module.exports = router;
