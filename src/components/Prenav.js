import "../styles/Prenav.css";

const Prenav = () => {
  return (
    <div className="prenav-container">
      <div className="prenav-contact">
        <a className="anchor phone" href="tel:9032447447">
          Mobile logo
        </a>
        <a className="anchor email" href="mailto:snehit.tadepalli95@gmail.com">
          Email logo
        </a>
      </div>

      <div className="prenav-social">
        <a className="anchor email" href=".com">
          WhatsApp Logo
        </a>

        <a className="anchor phone" href=".com">
          LinkedIn logo
        </a>

        <a className="anchor email" href=".com">
          Twitter Logo
        </a>

        <a className="anchor email" href=".com">
          Facebook Logo
        </a>
      </div>
    </div>
  );
};

export default Prenav;
