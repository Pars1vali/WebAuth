// import { client } from 'https://unpkg.com/@passwordless-id/webauthn@1.5.0/dist/webauthn.min.js'

// const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e"
let registrBtn = document.getElementById("registrBtn")
registrBtn.addEventListener("click", registration)

async function registration() {
  let randomStringFromServer = "randomStringFromServer"
  const publicKeyCredentialCreationOptions = {
    challenge: Uint8Array.from(
      randomStringFromServer, c => c.charCodeAt(0)),
    rp: {
      name: "Duo Security",
      id: "pars1vali.github.io",
    },
    user: {
      id: Uint8Array.from(
        "UZSL85T9AFC", c => c.charCodeAt(0)),
      name: "lee@webauthn.guide",
      displayName: "Lee",
    },
    pubKeyCredParams: [{ alg: -7, type: "public-key" }],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
    },
    timeout: 60000,
    attestation: "direct"
  };

  const credential = await navigator.credentials.create({
    publicKey: publicKeyCredentialCreationOptions
  });
  console.log(credential)

}
