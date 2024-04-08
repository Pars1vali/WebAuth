if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
          .then(registration=>
              console.log('Service Worker зарегистрирован:', registration)
            )
          .catch(error => {
              console.log('Ошибка при регистрации Service Worker:', error);
          });
  });



  
  // navigator.serviceWorker.register("service-worker.js").then((registration) => {
  //   return registration.pushManager.getSubscription().then(/* ... */);
  // });

  // navigator.serviceWorker.register("service-worker.js").then(async function (registration){
  //   // const publicKey = "vfhdjvbbhfdbvkjfdbvjkhre";

  //   // const subscription = await registration.pushManager
  //   // .subscribe({
  //   //   userVisibleOnly:true,
  //   //   applicationServerKey:publicKey
  //   // })
  //   console.log("Создание подписки");
  //   const serviceWorker = await navigator.serviceWorker.ready;
  //   console.log("Отправка подписки на сервер");
  //   const subscription =  await serviceWorker.pushManager.subscribe({
  //     userVisibleOnly: true
  //   });
    

  //   fetch('https://d5drdlc8v1vttbkhfft0.apigw.yandexcloud.net/notification-push', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Custom-Info': 'REGISTRAION'
  //   },
  //   body: JSON.stringify(subscription)
  // })
  // });

}