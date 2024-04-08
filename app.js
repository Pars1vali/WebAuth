if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
          .then(registration => {
              console.log('Service Worker зарегистрирован:', registration);
          })
          .catch(error => {
              console.log('Ошибка при регистрации Service Worker:', error);
          });
  });

  navigator.serviceWorker.ready.then(async function (registration){
    const publicKey = "";

    const subscription = await registration.pushManager
    .subscribe({
      userVisibleOnly:true,
      applicationServerKey:publicKey
    })

    fetch("url",{
      method:"POST",
      body: JSON.stringify(subscription),
      headers:{
        "Content-Type":"application/json",
      },
    })

  });

  navigator.serviceWorker.register("service-worker.js").then((registration) => {
    return registration.pushManager.getSubscription().then(/* ... */);
  });
}