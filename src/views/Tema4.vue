<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 4
      h1 Alistamiento de equipos y medios de transporte para la movilización de la carga

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")
      .col-lg-8(data-aos="fade-right")
        p El transporte, y la logística en general, incide de manera directa con el costo de los productos y la decisión importante es decidir cómo se va a transportar, en qué tiempos se debe entregar, qué flexibilidad de maniobra tengo en caso de alguna contingencia para cambiar el modo o el medio de transporte, buscando siempre reducir al máximo los costos, los reprocesos y los trasbordos, apoyándonos en muchas ocasiones de las posibilidades del transporte multimodal.
        p.mb-0 El transporte de mercancías se puede realizar usando uno o más de los siguientes modos de transporte, así:

    .bg--half
      .row.justify-content-center(data-aos="fade-right")
        .col-auto
          .hlgt--yellow02
            h4.mb-0 Modos del transporte

    .bg_img_01.py-5.px-lg-0.px-4.mb-5
      .row.justify-content-center(data-aos="zoom-in")        
        .col-lg-11.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t4/t4_02.png", alt="alt")
        .col.d-lg-none.d-flex
          figure
            img(src="@/assets/curso/temas/t4/t4_02A.png", alt="alt")

    p(data-aos="fade-right").mb-5 Se relacionan en orden de los más económicos en relación con el volumen movilizado y los costos asociados de la siguiente manera:

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Transporte marítimo y fluvial 

    p(data-aos="fade-right") A nivel mundial es el más utilizado para el comercio internacional, ya que tiene ventajas muy importantes pues puede movilizar grandes volúmenes de carga a un costo muy económico, en la actualidad más del 80 por ciento de las mercancías a nivel global se mueven a través de este modo. 

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_03.png", alt="alt")
      .col-lg-9
        p(data-aos="fade-right") Para este transporte de grandes dimensiones, se utilizan como medio los buques, los cuales están clasificados de la siguiente manera:

        TabsA.color-acento-contenido(data-aos="fade-right")
          .bg--PaleYellow3.p-4.br--02(titulo="Buques portacontenedores")
            h4 Buques portacontenedores
            p Transportan las mercancías y las carga en contenedores estándar de 20 y 40 pies de longitud.

          .bg--PaleYellow3.p-4.br--02(titulo="Buques graneleros")
            h4 Buques graneleros
            p Son dedicados al transporte de carga a granel, pero secas, como granos, carbón, etc.

          .bg--PaleYellow3.p-4.br--02(titulo="Buques petroleros")
            h4 Buques petroleros
            p Son dedicados al transporte de carga líquida petróleo o sus derivados.

          .bg--PaleYellow3.p-4.br--02(titulo="Buques portacontenedores")
            h4 Buques portacontenedores
            p A este se le llama TEU #[em (Twenty-foot Equivalent Unit)] y por lo tanto la capacidad de estos buques está medida en TEU.

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Transporte ferroviario

    p(data-aos="fade-right") Después del transporte marítimo es el segundo más económico, ya que permite la movilización de enormes cantidades de mercancías y cargas a larga distancia. Entre las ventajas más significativas están:

    .row.justify-content-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt")
      .col-lg-7(data-aos="fade-right")
        ul.fa-ul
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Este modo de transporte puede alcanzar velocidades importantes y transportar volúmenes importantes de carga, pero la velocidad está condicionada al número de vagones que halla la locomotora.
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Ambientalmente genera menos polución y emisiones de partículas, más ahora que están en uso los trenes eléctricos y el desarrollo de materiales más resistentes y livianos han permitido la eficiencia energética en las locomotoras. 
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Permite movilizar cargas a grandes distancias, con un consumo muy bajo de combustible haciéndolo económico sobre todo en transporte de materias primas de bajo costo. 
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Las desventajas en este modo de transporte es que solo puede movilizarse, por donde existan rieles instalados, lo que limita su expansión, además que, en la infraestructura existente, alguna falla en algún punto determinado genera un colapso e interrupción en la movilización. 
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Las frecuencias de tránsito entre el paso de un tren con respecto a otro tienen bastantes diferencias en tiempo y las tasas de accidentes son bajas.

    p(data-aos="fade-right").mb-5 Para este transporte ferroviario se utilizan los trenes, los cuales están clasificados de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_05.png", alt="alt")
      .col-lg-9(data-aos="fade-right")
        TabsA.color-acento-contenido
          .bg--PaleYellow3.p-4.br--02(titulo="Ferrocarril o tren")
            h4 Ferrocarril o tren
            p Compuesto por una locomotora y sus vagones para carga o pasajeros.

          .bg--PaleYellow3.p-4.br--02(titulo="Subterráneo o metro")
            h4 Subterráneo o metro
            p Son trenes de movimientos en las ciudades, generalmente para movilización de pasajeros, en donde la red está interconectada y compuesta de estaciones para ascenso y descenso de pasajeros.

          .bg--PaleYellow3.p-4.br--02(titulo="Tranvía")
            h4 Tranvía
            p Al igual que el metro, este se moviliza en las ciudades, pero la diferencia es que este va sobre la superficie de las ciudades, compartiendo con otros modos de transporte la infraestructura.

          .bg--PaleYellow3.p-4.br--02(titulo="Funicular")
            h4 Funicular
            p Es la versión del tranvía, pero aéreo, cuya locomoción está basada en cables de alta resistencia en lugares con topografía montañosa y en los cuales los vagones se trasladan suspendidos.

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Transporte carretero 

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_06.png", alt="alt")
      .col-lg-8(data-aos="fade-right")
        p Su medio de transporte es la tierra. Este modo de transporte es muy flexible, pues puede llegar a casi cualquier destino y los vehículos son adaptados a las necesidades, además, presenta una agilidad, rapidez y adaptación a los cambios de las solicitudes del cliente.

        p El medio más conocido para el transporte de carga es el camión, aunque existe una variedad de medios dependiendo las necesidades, los tiempos, la accesibilidad para entrega de las mercancías. La utilización de estos vehículos puede darse para transportar cargas completas o consolidados.

        p Para el Estado el desarrollo de infraestructura y los costos de mantenimiento son bajos, una vez instalada las unidades de transporte permiten la entrega de la carga puerta a puerta en unidades más pequeñas o en las que originalmente se carguen, además permite integración en zonas de difícil acceso y la posibilidad de ser complementado con otros modos y otros medios de transporte. 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Las desventajas en la operación de este modo de transporte, debido a su misma versatilidad, es que la tasa de accidentalidad que se presenta en las carreteras es muy alta, y estas unidades de transporte no son las mejores para transportar grandes volúmenes de carga.
        p.mb-0 Un tema sensible en este modo y en los medios que utiliza es el impacto medioambiental que genera la operación de vehículos debido a la utilización de combustibles fósiles que generan emisiones de monóxido de carbono.
      .col-lg-6(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_07.png", alt="alt")

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Transporte aéreo

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p En la actualidad es el que más regulación tiene debido al riesgo potencial. La carga movilizada por transporte aéreo va en aumento, pero estas ventajas en la rapidez y eficiencia lo hacen el modo más caro de operar. La tecnología avanza y cada vez se diseñan aviones con mayores capacidades, motores más eficientes y mayores alturas de vuelo, en especial este transporte opera mercancías con alto valor, tecnológicas y perecederos en el ámbito del transporte internacional.

        p.mb-0 El transporte aéreo hoy es el que tiene mayor alcance en distancias que puede recorrer por unidad de transporte de manera eficiente y muy rápida y logra sobrepasar cualquier obstáculo geográfico, esto logrado a través de investigación y alta inversión por la tecnología que necesita. Este transporte está clasificado básicamente en dos categorías: 

      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_08.png", alt="alt")


    .row.justify-content-center.mb-5
      .col-lg-6.g-0.mb-4.mb-lg-0(data-aos="flip-left")
        .bg--darkGray02.hg--100
          figure
            img(src="@/assets/curso/temas/t4/t4_09.png", alt="alt")
          .p-4
            h5.text-white Transporte en aviones comerciales 
            p.text-white.mb-0 Se especializa en transporte de pasajeros y pequeñas unidades de carga.
      .col-lg-6.g-0(data-aos="flip-left")
        .bg--orange02.hg--100
          figure
            img(src="@/assets/curso/temas/t4/t4_10.png", alt="alt")
          .p-4
            h5 Transporte en aviones de carga 
            p.mb-0 Su fuerte es el movimiento de carga, que cumpla con ciertas características de tamaño, peso, embalaje acorde al tipo de avión y longitudes de pista.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_11.png", alt="alt") 
      .col-lg-8.order-1.order-lg-2(data-aos="fade-right")
        .row.mb-4
          .col-auto
            .hlgt--yellow02
              h4.mb-0 Características técnicas
        ul.fa-ul
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Un avión pequeño puede transportar hasta 30 toneladas, uno mediano cargas mayores a 30 toneladas y uno grande hasta 50 toneladas en bodega de carga. 
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Deben estar provistos de compuertas de mayores dimensiones, fuselaje más ancho, mayor cantidad de rueda que disipen la carga puntual tanto al aterrizaje como al despegue, alas a mayor altura y más puestas para ingreso de carga. 
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Este tipo de transporte tiene tiempos de entrega mucho más cortos, transporta mercancías de alto valor o perecederos con seguridad y en el menor tiempo posible.
          li.mb-2
            i.fa-li.fas.fa-circle.bullet--orange
            | Dentro de las desventajas encontramos los altos costos de movilización, las altas inversiones en infraestructura y el constante seguimiento y monitoreo para evitar accidentes, además está condicionado a las variables climáticas, esto sin contar las emisiones al ambiente por la quema de combustible en el proceso de propulsión.

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Transporte multimodal

    .row.justify-content-center
      .col-xl-7.mb-4.mb-xl-0
        p(data-aos="fade-right") Este articula varios modos de transporte, sin afectar una unidad de carga, que puede ser un contenedor, realizando las operaciones logísticas, trasbordos y transporte de la manera más rápida y segura. Hay que tener en cuenta lo siguiente:
        .row(data-aos="fade-right")
          .col-xl-6
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Se define el modo. 
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Se define el medio de transporte. 
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Se realiza el alistamiento de la unidad de transporte. 
              li.mb-0
                i.fa-li.fas.fa-circle.bullet--orange
                | Se carga.
          .col-xl-6
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Se revisa que cumpla con las especificaciones técnicas, acorde al tamaño y peso de la carga. 
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Se revisa la documentación de conductor y unidad de transporte de acuerdo a la ruta a seguir y a las características del sitio de entrega. 
              li.mb-2
                i.fa-li.fas.fa-circle.bullet--orange
                | Y sale a realizar el recorrido. 

      .col-xl-5.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_12.png", alt="alt")




</template>

<script>
export default {
  name: 'Tema4',
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
