import Logo from '../components/bitly_logo.svg'


export default function Footer() {

    return (
      <>
        <div className="footer-container">
          <img src={Logo} alt="" />
          <p>Copyright 2024, All Right Reserved</p>
          <p>made with &#10084; By Mahesh4net</p>
        </div>
      </>
    );
}