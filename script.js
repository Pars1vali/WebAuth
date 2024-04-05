let registrBtn = document.getElementById("registrBtn")
registrBtn.addEventListener("click", registration)
let loginInput = document.getElementById("loginInput")
let passwordInput = document.getElementById("passwordInput")


async function registration() {
  let randomStringFromServer = "randomStringFromServer"
  let email  = loginInput.value;
  let password  = passwordInput.value;
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

  console.log(JSON.stringify(credential))

}
