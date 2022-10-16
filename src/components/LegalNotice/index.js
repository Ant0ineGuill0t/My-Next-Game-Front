// == Import
// data, styles
import './style.scss';

function LegalNotice() {
  return (
    <div className="legal-notice">
      <h1 className="legal-notice__main-title">Legal notices</h1>
      <p className="legal-notice__content">Please read carefully the different terms of use of this site.
        before browsing its pages.
        By connecting to this site, you accept these terms and conditions without reservation.
        Also, in accordance with article n ° 6 of Law n ° 2004-575 of June 21, 2004 for the
        confidence in the digital economy, the managers of this website www.anthedesign.fr
        are :
      </p>
      <h2 className="legal-notice__title">Website editor :</h2>
      <p className="legal-notice__content">SARL MNG<br />
        Editorial manager: Camille<br />
        12 Rue du JavaScript, 12345 OCLOCK<br />
        Phone number : 00 00 00 00 00<br />
        Email : Camille@oclock.io<br />
        Website : www.MNG.fr
      </p>
      <h2 className="legal-notice__title">Terms of use :</h2>
      <p className="legal-notice__content">This site (www.MNG.fr) is available in different web languages
        (HTML, HTML5, Javascript, CSS, etc.) for better user comfort
        and nicer graphics.
        We recommend that you use modern browsers such as Internet Explorer,
        Safari, Firefox, Google Chrome, etc.
        The MNG web agency implements all the means at its disposal,
        to provide information
        reliable and reliable updating of its websites.
        However, errors or omissions may occur.
        The Internet user must therefore ensure the accuracy of the information with MNG,
        and report any changes to the site that it deems useful.
        MNG is in no way responsible
        the use made of this information, and any direct or indirect damage
        may derive from it.
      </p>
      <h2 className="legal-notice__title">Intellectual property :</h2>
      <p className="legal-notice__content">All the content of this site www.MNG.fr, including, without limitation,
        graphics, images, texts, videos, animations, sounds, logos, gifs and icons as well
        that their formatting is the exclusive property of the company
        with the exception of trademarks, logos or content belonging to other companies
        partners or authors.
        Any reproduction, distribution, modification, adaptation, retransmission or publication,
        even partial, of these different elements is strictly prohibited without the express
        agreement in writing from SARL MNG. This representation or reproduction,
        by any means whatsoever,
        constitutes an infringement sanctioned by articles L.335-2 and following of the Code
        intellectual property. Failure to comply with this prohibition
        constitutes an infringement that may incur civil liability
        and penal of the counterfeiter. In addition, the owners of the Content
        copied may bring legal action against you.
      </p>
    </div>
  );
}
export default LegalNotice;
