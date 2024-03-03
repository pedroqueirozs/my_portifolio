import imgDiscord from "../assets/img_discord.svg";
import imgGithub from "../assets/img_github.svg";
import imgInstagram from "../assets/img_instagram.svg";
import imgLinkedin from "../assets/img_linkedin.svg";
import imgWhatsApp from "../assets/img_whatsapp.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <a target="blank" href="https://github.com/pedroqueirozs">
          <img src={imgGithub} alt="Logo do Github" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/pedro-queiroz-99b614263/"
        >
          <img src={imgLinkedin} alt="Logo do Linkedin" />
        </a>
        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=5511973779229&text&type=phone_number&app_absent=0"
        >
          <img src={imgWhatsApp} alt="Logo do WhatsApp" />
        </a>
        <a href="#">
          <img src={imgDiscord} alt="Logo do Discord " />
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/_pedroqueirozs?igsh=ejJ6bGluZ2RmbnV5"
        >
          <img src={imgInstagram} alt="Logo do Instagram" />
        </a>
      </div>
    </>
  );
}
export default Footer;
