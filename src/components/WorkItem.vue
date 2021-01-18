<template>
  <div class="mb-5">
    <h4 class="pt-0 my-0">{{ employment.title }}</h4>
    <h5 class="pt-0 my-0">{{ employment.company }}</h5>
    <div class="text-muted mt-2">
      {{ employment.start }} - {{ employment.end }}
    </div>
    <p class="mt-1">
      <ul>
        <li v-for="(desc, idx) in employment.description" :key="idx">
          {{ desc }}
        </li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
  props: {
    'employment': {
      type: Object,
      default: function() {
        return {
          "title": "",
          "company": "",
          "start": "",
          "end": "",
          "description": [
            ""          ]
        }
      }
    }
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped></style>