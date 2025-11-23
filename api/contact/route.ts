import { NextResponse } from 'next/server';

// Simulation d'une fonction d'envoi d'e-mail (vous utiliserez Nodemailer, SendGrid, etc. ici)
async function sendEmail(data: { nom: string; email: string; message: string }) {
    console.log('Tentative d’envoi d’email avec les données :', data);

    // NOTE IMPORTANTE :
    // En production, vous intégrerez ici un service d'envoi d'e-mails sécurisé.
    // Exemple d'intégration à un service (pseudo-code):
    /*
    const transporter = nodemailer.createTransport({ ... });
    await transporter.sendMail({
      from: '"Taram Tech Contact" <noreply@taramtech.com>',
      to: "votre_email_de_reception@taramtech.com",
      subject: `Nouveau message de ${data.nom}`,
      html: `Email: ${data.email}<br/>Message: ${data.message}`,
    });
    */

    // Simuler une réponse réussie
    return { success: true };
}

// Handler POST pour recevoir la soumission du formulaire
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nom, email, message } = body;

        // 1. Validation de base des champs
        if (!nom || !email || !message) {
            return NextResponse.json({ message: 'Tous les champs requis ne sont pas remplis.' }, { status: 400 });
        }

        // 2. Traitement / Envoi de l'e-mail
        const result = await sendEmail({ nom, email, message });

        if (result.success) {
            return NextResponse.json({ message: 'Message envoyé avec succès !' }, { status: 200 });
        } else {
            throw new Error("L'envoi d'email a échoué.");
        }
    } catch (error) {
        console.error('Erreur lors du traitement du formulaire de contact :', error);
        return NextResponse.json(
            { message: "Échec de l'envoi. Erreur interne du serveur." },
            { status: 500 }
        );
    }
}