// import { client } from 'https://unpkg.com/@passwordless-id/webauthn@1.5.0/dist/webauthn.min.js'

// const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e"
let registrBtn = document.getElementById("registrBtn")
registrBtn.addEventListener("click", registration)

async function registration(){
    let credential = await navigator.credentials.create({
        publicKey: {
          challenge: new Uint8Array([117, 61, 252, 231, 191, 241]),
          rp: { id: "pars1vali.github.io/WebAuth/", name: "ACME Corporation" },
          user: {
            id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
            name: "jamiedoe",
            displayName: "Jamie Doe"
          },
          pubKeyCredParams: [ {type: "public-key", alg: -7} ]
        }
      });
      console.log(credential)
      
}
