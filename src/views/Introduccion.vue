<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.txt--sistema.fas.fa-info
      h1 Introducción

    .bg--grad_01.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-right")
          p En este componente formativo se revisarán aspectos como el seguimiento y control de los equipos, asociado a la consulta de mapas, lo que permitirá definir las rutas y determinar cuáles son las más favorables para el desarrollo de las operaciones logísticas, por sus facilidades e infraestructura y derivado de esto, así como cuáles son los equipos que más se adaptan a las condiciones anteriormente descritas. 

          p Es importante resaltar que una vez definidos los equipos y las rutas, se debe realizar un aseguramiento previo, asociado al producto, sus condiciones de transporte y normatividad, en el tema de los pasajeros, se requieren elementos normativos y de servicio.

          p.mb-0 La coordinación y operación, son el eje fundamental del transporte, a continuación se expone su desarrollo:

        .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/intro/intro.png", alt="alt")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ImLbCl7IIg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
