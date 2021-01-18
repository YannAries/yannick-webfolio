<template>
  <div>
    <Card title="Qui suis-je ?">
      <p class="lead">
        Je suis <strong>{{ personal.full_name }}</strong>, <em>développeur web</em> front-end basé à Montréal au Québec. Suivez-moi à travers les réseaux professionnels suivants:
        <template v-for="(social, idx) in socials">
          <a
            :key="idx"
            :href="social.link"
            rel="noopener noreferrer"
            :style="{color: social.color}"
            target="_blank">
            {{ social.name }}
          </a>
          {{ idx !== socials.length - 1 ? ', ': ''}}{{ idx === socials.length - 2 ? 'et mon': ''}}
        </template>
      </p>
      <p>
        Actuellement de retour aux études avec l'ambition de me perfectionner en développement web. 
        J'aime transmettre ma passion des T.I. afin d'améliorer le quotidien des gens en le rendant plus simple et accessible.
      </p>
      <p> 
        Ainsi que concevoir et développer des produits de qualité dans un environnement dynamique.
      </p>
      <p>
        N'hésitez pas à me contacter si vous cherchez un développeur, si vous avez une question 
        ou si vous souhaitez simplement vous connecter avec moi.  
      </p>
      <p>Construisons quelque chose ensemble!</p>
      <strong><a href="mailto:yannick.guion@protonmail.com" target="_blank" rel="noopener noreferrer">yannick.guion@protonmail.com</a></strong>
      <div class="mt-5">
        <button class="btn btn-success mr-3" @click="downloadResume">Télécharger mon CV</button>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from './Card.vue'

export default {
  name: "Overview",
  props: {
    'socials': {
      type: Array,
      required: true,
      default: function() {
        return []
      }
    },
    'personal': {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    },
    'getJob': {
      type: String,
      required: false,
      default: function() {
        return {}
      }
    }
  },
  components: {
    Card
  },
  
  methods: {
    downloadResume() {
        window.open(this.getJob, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.lead {
  color: #000;
}

a {
  color: #212529;
}
</style>