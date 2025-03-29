<!-- https://svelte.dev/playground/0b880cafcb46448c92c500480794a152?version=3.44.3 -->
<script>
  import Tab from './Tab.svelte'

  let tabs = ['First', 'Second', 'Third']

  let tab = 'First'
</script>

<nav class="flex gap-1em p-1em">
  {#each tabs as tabId (tabId)}
    <label class="relative">
      <input
        type="radio"
        bind:group={tab}
        name="tabs"
        value={tabId}
        id={tabId}
        class="absolute opacity-0"
      />
      <span
        class="rounded-0.65rem bg-[#ddeeef] px-1.5rem py-0.6rem text-1.25rem"
      >
        {tabId}
      </span>
    </label>
  {/each}
</nav>

<Tab {tab} />

<style>
  input:focus + span {
    outline: 2px solid #000;
  }

  input:checked + span {
    background-color: pink;
  }
</style>
