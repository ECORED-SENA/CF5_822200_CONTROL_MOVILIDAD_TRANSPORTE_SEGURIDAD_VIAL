<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 2
      h1 Técnicas de consulta de mapas

    .row.justify-content-center.mb-4
      .col-auto(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_01.svg", alt="alt").img85.m-auto
      .col(data-aos="fade-right")
        p.mb-0 Es muy importante en la etapa de planeamiento de rutas, realizar en algunas ocasiones consultas físicas, documentales y digitales de las zonas de influencia del proyecto logístico.

    p(data-aos="fade-right").mb-5 Los mapas son una herramienta importante que brindan información de las rutas, orientándose gráficamente sobre aspectos muy específicos, entre los cuales están:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CNmBvhlvfXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
