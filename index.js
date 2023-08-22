<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>

  <link rel="stylesheet" href="style.css">
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Saira:wght@500&display=swap');
  
      </style>

<link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body class="h-full" style="background-color:#fff7de">

  <div class="navbar" style="display: flex;">
    <a class="logo" href="https://www.opbnbpunks.net/" style="cursor: pointer;">
      <img src="/logo.png"
        style="width: 301px; height: 106px; margin-left: 75px; margin-top: 50px;">
    </a>

    <div class="bar" style="display: flex; text-align: center;
    margin-top: 81px;

    font-weight: bold;
    font-size: 30px;
    letter-spacing: 4px;
    cursor: pointer;">
      <a class="option" style="margin-left: 400px;" style="cursor: pointer;" href="https://www.wallet.opbnbpunks.net/">
        <b>MY NFTS</b>
      </a>
      <a class="option" style="margin-left: 80px;" style="cursor: pointer;" href="https://www.opbnbpunks.net/">
        <b>NFT MARKETPLACE</b>
      </a>
      <a class="option" style="margin-left: 80px;" style="cursor: pointer;" href="https://www.opbnbpunks.net/">
        <b>FAQ</b>
      </a>
      <a class="option" style="margin-left: 80px;" style="cursor: pointer;" href="https://t.me/opBNB_punks" target="_blank">
        <img src="/tg.png">
      </a>
      <a class="option" style="margin-left: 80px;" style="cursor: pointer;" href="https://twitter.com/opPunksBNB" target="_blank">
        <img src="/tw.png">
      </a>


    </div>


  </div>
</br>
  <main class="p-10 flex justify-center min-h-full">
    <div class="w-4/5">
      <div class="mb-10">
        <input type="text" id="wallet_address" autofocus autocomplete="off" placeholder="Wallet Address" class="w-2/5 border-2 border-blue-500 px-4 py-1 uppercase rounded-md text-xl text-blue-800 font-italic outline-none">

        <button id="load_button" style="margin-left: 60px; padding: 10px; padding-left: 25px; padding-right: 25px; letter-spacing: 2px;" class="border-5 border-yellow-500 bg-yellow-500 text-black transition-colors px-4 outline-none py-1 uppercase rounded-md text-xl font-bold">
          view my punks
        </button>
      </div>
    </br>
      <div id="nfts" class="flex gap-7 flex-wrap"></div>
    </div>
  </main>

  <template id="nft_template">
    <section>
      <h1 class="font-bold bg-yellow-500 text-white text-center rounded-t-md"></h1>

      <a>
        <img class="rounded-b-md w-40 h-40" src="" alt="">
      </a>
    </section>
  </template>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"></script>

  <script type="module" src="index.js"></script>
</body>
</html>
