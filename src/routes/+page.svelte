<script>
	import Grid from "svelte-grid";
	import gridHelp from "svelte-grid/build/helper/index.mjs";
	
	const id = () => "_" + Math.random().toString(36).substr(2, 9);

const COL = 6;

let items = [
  {
    [COL]: gridHelp.item({
      x: 0,
      y: 0,
      w: 4,
      h: 4,
      draggable: false,
    }),
    id: id(),
  },
  {
    [COL]: gridHelp.item({
      x: 0,
      y: 0,
      w: 4,
      h: 6,
      draggable: false,
    }),
    id: id(),
  },
  {
    [COL]: gridHelp.item({
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      draggable: false,
    }),
    id: id(),
  },
  {
    [COL]: gridHelp.item({
      x: 4,
      y: 2,
      w: 2,
      h: 2,
      draggable: false,
    }),
    id: id(),
  },
  {
    [COL]: gridHelp.item({
      x: 4,
      y: 4,
      w: 2,
      h: 2,
      draggable: false,
    }),
    id: id(),
  },
  
];
const cols = [[1600, 6]];
</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="cours de l'année 2024" />
</svelte:head>

<main>
	<section>
		<div class=container>
			<Grid bind:items={items} rowHeight={100} let:item {cols}>
			  <div class=main_box>
				Box
			  </div>
			</Grid>
			<Grid bind:items={items} rowHeight={100} let:item {cols}>
				<div class=main_box>
				  Box
				</div>
			  </Grid>
		</div>
	</section>
</main>
<style>
.size {
  max-width: 100%;
  width: 100%;
}
.main_box {
  background: #f1f1f1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 100%;
  width: 100%;
}
</style>