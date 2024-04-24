import { createSignal } from "solid-js";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const mobile = document.getElementById("mobile").value;
    const mail = document.getElementById("mail").value;
    const date = document.getElementById("date").value;
    const lieu = document.getElementById("lieu").value;
    const commande = document.getElementById("commande").value;

    alert(
      `Informations saisies :\n\nNom: ${nom}\nPrénom: ${prenom}\nTéléphone: ${mobile}\nAdresse mail: ${mail}\nDate: ${date}\nLieu: ${lieu}\nCommande: ${commande}`
    );
  };

  return (
    <section style='margin-bottom: 10px;'>
      <h1>Services de livraison</h1>

      <p style='color: white; text-align:center;' class="text-center">
        Pour passer une commande de livraison, veuillez remplir le formulaire
        ci-dessous en fournissant les détails de votre adresse de livraison, le
        choix des plats que vous souhaitez déguster, ainsi que toute autre
        information pertinente. Notre équipe de livraison se mettra en action
        pour vous apporter une expérience culinaire exceptionnelle directement
        chez vous.
      </p>

      <div class="formulaire">
        <form onSubmit={handleSubmit}>
          <label for="nom">Nom: </label>
          <input type="text" id="nom" name="nom" placeholder="Entrez votre nom..." /><br />
          <label for="prenom">Prénom: </label>
          <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom..." /><br />
          <label for="mobile">Téléphone: </label>
          <input type="tel" id="mobile" name="mobile" placeholder="+221 77 123 45 78" /><br />
          <label for="mail">Adresse mail: </label>
          <input type="email" id="mail" name="mail" placeholder="WaveRider@exemple.com" /><br />
          <label for="date">Date: </label>
          <input type="date" id="date" name="date" /><br />
          <label for="lieu">Lieu: </label>
          <input type="text" id="lieu" name="lieu" placeholder="Lieu de livraison" /><br />
          <label for="commande">Votre commande: </label>
          <input type="text" id="commande" name="commande" placeholder="commande à livrer" /><br />
          <input type="submit" id="Envoyer" value="Envoyer" />
          <input type="reset" id="Annuler" value="Annuler" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
