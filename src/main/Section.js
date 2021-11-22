import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import Degrees from "../components/Degrees/Degrees";
import Employment from "../components/Employment/Employment";
import People from "../components/People/People";
import Research from "../components/Research/Research";

/**
 * this section contains the components that will be displayed only on the main page and not on every page we visit. This one big component is the rendered for url "/"
 */

export default function Section() {
  return (
    <>
      <About></About>
      <Degrees></Degrees>
      <People></People>
      <Employment></Employment>
      <Research></Research>
      <ContactUs></ContactUs>
    </>
  );
}
