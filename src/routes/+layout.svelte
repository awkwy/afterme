<script>
	import '../app.pcss';
	import { page } from '$app/stores';
	import { DarkMode } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
</script>

<html class="dark" lang="en"></html>
  <Navbar>
	<NavBrand href="/">
	  <!--<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />-->
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AfterMe</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl} {activeClass} {nonActiveClass}>
	  <NavLi href="/">Acceuil</NavLi>
	  <NavLi href="/cours">Cours</NavLi>
	  <NavLi href="/exercices">Exercices</NavLi>
	  <NavLi href="/pendu">Pendu</NavLi>
	  <NavLi><DarkMode/></NavLi>
	</NavUl>
  </Navbar>
	<main>
		<slot></slot>
	</main>
	
<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		  <!--<FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />-->
		  <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
			<FooterLink href="/">About</FooterLink>
			<FooterLink href="/">Privacy Policy</FooterLink>
			<FooterLink href="/">Licensing</FooterLink>
			<FooterLink href="/">Contact</FooterLink>
		  </FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright href="/" by="AfterMe" />
	</Footer>

