let registrBtn = document.getElementById("registrBtn")
registrBtn.addEventListener("click", registration)
let loginInput = document.getElementById("loginInput")
let passwordInput = document.getElementById("passwordInput")


async function registration() {
  let randomStringFromServer = "randomStringFromServer"
  let email = loginInput.value;
  let password = passwordInput.value;
  const publicKeyCredentialCreationOptions = {
    challenge: Uint8Array.from(
      randomStringFromServer, c => c.charCodeAt(0)),
    rp: {
      name: "Duo Security",
      id: "webauth-pwa.netlify.app",
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
  fetch('https://d5d3nl0ubn1h1m5gvr06.apigw.yandexcloud.net/surf-coffe-guest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Info': 'REGISTRAION'
    },
    body: JSON.stringify(credential)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
      return response.json();
    })
    .then(data => {
      console.log('Успешно отправлено:', data);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}
