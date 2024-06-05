<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
    import { Tabs, TabItem } from 'flowbite-svelte';
  </script>
  
 
  <svelte:head>
      <title>Mathématiques</title>
      <meta name="description" content="Mathématique premiere année cap" />
  </svelte:head>
  
  <main>
    <Accordion>
        <AccordionItem>
          <span slot="header">C'est quoi une statistique ?</span>
          <div slot="arrowup">
            <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
          </div>
          <span slot="arrowdown">
            <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
          </span>
          <Tabs tabStyle="full" defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700">
            <TabItem class="w-full" open>
              <span slot="title">Profile</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Profile:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
            <TabItem class="w-full">
              <span slot="title">Dashboard</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Dashboard:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
            <TabItem class="w-full">
              <span slot="title">Settings</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Settings:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
            <TabItem class="w-full">
              <span slot="title">Users</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Users:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
          </Tabs>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">C'est quoi la proportionnalité ?</span>
          <div slot="arrowup">
            <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
          </div>
          <span slot="arrowdown">
            <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
          </span>

          <Tabs tabStyle="full" defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700">
            <TabItem class="w-full" open>
              <span slot="title">Profile</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Profile:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
            <TabItem class="w-full">
              <span slot="title">Dashboard</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Dashboard:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
            <TabItem class="w-full">
              <span slot="title">Settings</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Settings:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
            <TabItem class="w-full">
              <span slot="title">Users</span>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Users:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabItem>
          </Tabs>


        </AccordionItem>


        <AccordionItem>
            <span slot="header">C'est quoi une equation ?</span>
            <div slot="arrowup">
              <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
            </div>
            <span slot="arrowdown">
              <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
            </span>
            
            <Tabs tabStyle="full" defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700">
                <TabItem class="w-full" open>
                  <span slot="title">Profile</span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <b>Profile:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </TabItem>
                <TabItem class="w-full">
                  <span slot="title">Dashboard</span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <b>Dashboard:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </TabItem>
                <TabItem class="w-full">
                  <span slot="title">Settings</span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <b>Settings:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </TabItem>
                <TabItem class="w-full">
                  <span slot="title">Users</span>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    <b>Users:</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </TabItem>
              </Tabs>


          </AccordionItem>

          <AccordionItem>
            <span slot="header">C'est quoi une fonction?</span>
            <div slot="arrowup">
              <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
            </div>
            <span slot="arrowdown">
              <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
            </span>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          </AccordionItem>




      </Accordion>
  </main>
  
  