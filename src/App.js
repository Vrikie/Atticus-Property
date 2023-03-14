import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

/* Nav Pages */
import Home from "./page/Home.js";
import Spiceyard from "./page/Spiceyard.js";
import Acquis from "./page/Acquis.js";
import Manage from "./page/Manage.js";
import About from "./page/About.js";
import Contact from "./page/Contact.js";

/* Non Nav Pages */
import Policy from "./page/Policy.js";

/* SY Nav Pages */
import Vacancies from "./page/Vacancies.js";
import Tenants from "./page/Tenants.js";
import Events from "./page/Events.js";
import Gallery from "./page/Gallery.js";
import Symanage from "./page/Symanage.js";

import "./styles/styles.scss";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/spice-yard" component={Spiceyard} />
        <Route path="/acquisitions" component={Acquis} />
        <Route path="/management" component={Manage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <Route path="/privacy-policy" component={Policy} />

        <Route path="/vacancies" component={Vacancies} />
        <Route path="/tenants" component={Tenants} />
        <Route path="/events" component={Events} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/sy-management" component={Symanage} />
      </Switch>
    </>
  );
}

export default App;
