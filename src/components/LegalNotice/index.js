// == Import
// data, styles
import './style.scss';

function LegalNotice() {
  return (
    <div className="legal-notice">
      <h1 className="legal-notice-main-title">Mentions légales</h1>
      <p className="legal-notice-content">Merci de lire avec attention les différentes modalités d’utilisation du présent site
        avant d’y parcourir ses pages.
        En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
        Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance
        dans l’économie numérique, les responsables du présent site internet www.anthedesign.fr
        sont :
      </p>
      <h2 className="legal-notice-title">Éditeur du Site :</h2>
      <p className="legal-notice-content">SARL MNG<br />
        Responsable éditorial : Camille<br />
        12 Rue du JavaScript, 12345 OCLOCK<br />
        Téléphone : 00 00 00 00 00<br />
        Email : Camille@oclock.io<br />
        Site Web : www.MNG.fr
      </p>
      <h2 className="legal-notice-title">Conditions d’utilisation :</h2>
      <p className="legal-notice-content">Ce site (www.MNG.fr) est proposé en différents langages web
        (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation
        et un graphisme plus agréable.
        Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer,
        Safari, Firefox, Google Chrome, etc…
        L’agence web MNG met en œuvre tous les moyens dont elle dispose,
        pour assurer une information
        fiable et une mise à jour fiable de ses sites internet.
        Toutefois, des erreurs ou omissions peuvent survenir.
        L’internaute devra donc s’assurer de l’exactitude des informations auprès de MNG ,
        et signaler toutes modifications du site qu’il jugerait utile.
        MNG n’est en aucun cas responsable
        de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect
        pouvant en découler.
      </p>
      <h2 className="legal-notice-title">Propriété intellectuelle :</h2>
      <p className="legal-notice-content">Tout le contenu du présent site www.MNG.fr, incluant, de façon non limitative,
        les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi
        que leur mise en forme sont la propriété exclusive de la société
        à l’exception des marques, logos ou contenus appartenant à d’autres sociétés
        partenaires ou auteurs.
        Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
        même partielle, de ces différents éléments est strictement interdite sans l’accord exprès
        par écrit de SARL MNG. Cette représentation ou reproduction,
        par quelque procédé que ce soit,
        constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
        de la propriété intellectuelle. Le non-respect de cette interdiction
        constitue une contrefaçon pouvant engager la responsabilité civile
        et pénale du contrefacteur. En outre, les propriétaires des Contenus
        copiés pourraient intenter une action en justice à votre encontre.
      </p>
    </div>
  );
}
export default LegalNotice;
