<script>
	  import { Card } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="cours de l'année 2024" />
</svelte:head>

<main class="wrapper">
  <div class="element1 grid-box">
    <Card class="text-center" size="xl" padding="xl">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggestrfafafazzazz inazz azaza azzazaz  azazaz reverse chronological order.</p>
    </Card>
  </div>
  <div class="element2 grid-box">2</div>
  <div class="element3 grid-box">3</div>
  <div class="element4 grid-box">4</div>
</main>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 10px;
  background: #1b2431;
}

.wrapper {
  width: 90vw;
  height: 96.2vh;
  margin: 5vh auto 5vh auto;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 1rem;
  grid-template-areas:
    "box1 box1 box1 box2"
    "box1 box1 box1 box3"
    "box1 box1 box1 box4";
}

.wrapper .grid-box {
  border-radius: 10px;
  /*background-color: yellowgreen;*/
  transition: all 250ms;
  font-size: 5rem;
  color: white;
  font-family: sans-serif;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  animation: fadein 1s ease-out normal backwards;
}

.wrapper .grid-box:hover {
  z-index: 2;
  position: relative;
  box-shadow: 0 1.5rem 2.8rem rgba(0, 0, 0, 0.15),
    0 1rem 1rem rgba(0, 0, 0, 0.15);
  transform: translate(0, -0.5rem) scale(1.01);
}

.wrapper .element1 {
  grid-area: box1;
  animation-delay: 0;
}
.wrapper .element2 {
  grid-area: box2;
  animation-delay: 100ms;
}
.wrapper .element3 {
  grid-area: box3;
  animation-delay: 200ms;
}
.wrapper .element4 {
  grid-area: box4;
  animation-delay: 200ms;
}

@keyframes fadein {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

</style>