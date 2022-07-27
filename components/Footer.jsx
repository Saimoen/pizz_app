import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import Image from "next/image";
import css from "../styles/Footer.module.css";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div>
      {/* Social Media */}
      <div className={css.container}>
        <span>All Rights Reserved</span>
        <div className={css.social}>
          <UilFacebook size={45} />
          <UilGithub size={45} />
          <UilInstagram size={45} />
        </div>

        {/* Logo Side */}
        <div className={css.logo}>
          <Image src={Logo} width={50} height={50} alt='' />
          <span>Fudo</span>
        </div>
      </div>
    </div>
  );
}
