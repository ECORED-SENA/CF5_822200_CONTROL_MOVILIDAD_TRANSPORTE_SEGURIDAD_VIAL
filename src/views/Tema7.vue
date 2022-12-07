<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.txt--sistema 7
      h1 Técnicas de inspección y alistamiento de medios de transporte

    p(data-aos="fade-right") Se inspeccionan las unidades de transporte por seguridad de todos los actores viales y para preservar la vida, los bienes y los recursos y detectar un problema a tiempo. 

    p(data-aos="fade-right") Las inspecciones son herramientas de control y seguimiento individual de las unidades de transporte o de los procesos que nos van a permitir realizar diagnósticos mediante formatos y registros de cómo están operativa y documentalmente todos los equipos, carga y operadores, como se muestra a continuación:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 2.
      span Alistamiento de medios de transporte

    .bg_img_01.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t7/t7_01.png", alt="alt")
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t7/t7_02.png", alt="alt")
        .col-lg-4.col-8
          figure
            img(src="@/assets/curso/temas/t7/t7_03.png", alt="alt")

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Técnicas de inspección 

    p(data-aos="fade-right").mb-4 Para que un vehículo pueda transitar por el territorio nacional:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .bloque-texto-f.hlgt--yellow01.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.bloque-texto-f__texto.text-center Debe garantizar como mínimo un perfecto funcionamiento de frenos, del sistema de dirección, del sistema de suspensión, del sistema de señales visuales y audibles permitidas y del sistema de escape de gases; y demostrar un estado adecuado de llantas, del conjunto de vidrios de seguridad y de los espejos y cumplir con las normas de emisiones contaminantes que establezcan las autoridades ambientales.
          .bloque-texto-f__autor
            h5.mb-0 - Ley 769 de 2002, Código Nacional de Tránsito Terrestre          
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t7/t7_04.png", alt="alt")

    .row.mb-5(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Resolución 3768 de 2013

    .rectangle_02.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-auto.me-4.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t7/t7_05.png", alt="alt")
        .col-lg
          p.mb-0 Regula la Inspección Técnica Vehicular o revisión técnica de vehículos, es un tipo de mantenimiento legal preventivo en que un vehículo es inspeccionado periódicamente por un ente certificador, el cual verifica el cumplimiento de las normas de seguridad y emisiones contaminantes que le sean aplicables, así:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t7/t7_06.svg", alt="alt")

      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-auto
            .squareNumber(data-letter="1")
          .col.g-0
            p Estado de la carrocería.
        .row
          .col-auto
            .squareNumber(data-letter="2")
          .col.g-0
            p Niveles de emisión de gases y elementos contaminantes acordes con la legislación vigente sobre la materia.
        .row
          .col-auto
            .squareNumber(data-letter="3")
          .col.g-0
            p Buen funcionamiento del sistema mecánico.
        .row
          .col-auto
            .squareNumber(data-letter="4")
          .col.g-0
            p Funcionamiento adecuado del sistema eléctrico y del conjunto óptico.
        .row
          .col-auto
            .squareNumber(data-letter="5")
          .col.g-0
            p Eficiencia del sistema de combustión interna.
        .row
          .col-auto
            .squareNumber(data-letter="6")
          .col.g-0
            p Elementos de seguridad.
        .row
          .col-auto
            .squareNumber(data-letter="7")
          .col.g-0
            p Buen estado del sistema de frenos constatando, especialmente, en el caso en que este opere con aire, que no emita señales acústicas por encima de los niveles permitidos.
        .row
          .col-auto
            .squareNumber(data-letter="8")
          .col.g-0
            p Las llantas del vehículo.
        .row
          .col-auto
            .squareNumber(data-letter="9")
          .col.g-0
            p Del funcionamiento de los sistemas y elementos de emergencia.
        .row
          .col-auto
            .squareNumber(data-letter="10")
          .col.g-0
            p Del buen funcionamiento de los dispositivos utilizados para el cobro en la prestación del servicio público (Ley 769 de 2002).        

    p(data-aos="fade-right").mb-5 Estas revisiones están reglamentadas basados en parámetros reglamentados en la Norma Técnica Colombiana NTC 5375 y NTC 5385, dando alcance a las inspecciones sensoriales y mecanizadas. La Norma 5375 define requisitos que deben cumplir los vehículos en las inspecciones y define cuando este no cumple y genera un riesgo.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mb-5(data-aos="zoom-in")
      .row(titulo="Para la revisión exterior")
        .col-12.mb-4.ms-lg-5
          p Para la revisión exterior, definida en la NTC 5375, los elementos a inspeccionar son:
                
        .col-auto
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Chasis.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Carrocería.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Limpiaparabrisas.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Espejos retrovisores.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Escalones de ascenso.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Soportes de llanta de repuesto.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Vidrios.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | Dispositivos de retención de carga.
        .col-lg
          figure
            img(src='@/assets/curso/temas/t7/t7_07.png', alt='')


      .row(titulo="Para la revisión interior")
        .col-12.mb-4.ms-lg-5
          p Para la revisión interior, basada en la seguridad pasiva del vehículo, la norma establece lo siguiente:

        .col-auto.d-none.d-lg-flex.ms-lg-5
          figure
            img(src='@/assets/curso/temas/t7/t7_08.png', alt='')
        .col-auto.d-flex.d-lg-none.order-2.order-lg-1
          figure
            img(src='@/assets/curso/temas/t7/t7_09.png', alt='')
                
        .col-lg.order-1.order-lg-2.mb-4.mb-lg-0
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Alumbrado y señalización:] es muy importante su adecuada revisión, ya que los equipos deben lograr ver y ser vistos en sus desplazamientos, importante en la seguridad activa.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Salidas de emergencia:] está dada sobre todo en el transporte de pasajeros para una adecuada evacuación en caso de emergencia, esto reglamentado en la NTC 5375.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Sistema de frenos:] debe evaluarse en forma detallada.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Sistema de suspensión:] posibles fugas, grietas u otros daños en sus amortiguadores.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Sistema de dirección:] revisar el líquido de dirección, revisar que no haya fugas, y el estado del líquido a baja presión de la bomba.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Rines y llantas:] presión de inflado adecuada, banda de rodamiento de la llanta y la banda lateral de las llantas para ver si hay desgaste irregular, grietas, raspones, protuberancias, cortes, nudos, objetos extraños u otros daños en las llantas por su uso.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Motor:] garantizar que los componentes del motor y los dispositivos de los diferentes sistemas de seguridad estén en buen estado.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Sistema de combustible:] revisar la presión del sistema de inyección directa se mide con un escáner y sensores.
            li.mb-2
              i.fa-li.fas.fa-circle.bullet--orange
              | #[strong Sistema de transmisión:] medición del fluido de transmisión automática.

    .row.mb-4(data-aos="fade-left")
      .col-auto
        .cstmH3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/h3_icon.svg", alt="alt").img35
            .col
              h3.mb-0 Alistamiento de unidades de transporte

    p(data-aos="fade-right").mb-5 Una vez la unidad de transporte ha llegado para el proceso de cargue, todos los vehículos deben cumplir con la revisión e inspección como proceso de alistamiento, de la siguiente manera:

    .bg_img_01.p-5(data-aos="zoom-in")
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t7/t7_10.svg', alt='')

        .bg--yellow2.p-3(x="92%" y="41.5%" numero="+")
          .h5.mb-2 El personal
          p Debe estar cualificado para realizarlo, como mecánicos certificados en alistamiento que además ejercen como mecánicos de mantenimiento.

        .bg--yellow2.p-3(x="70%" y="73.5%" numero="+")
          .h5.mb-2 Revisión del vehículo
          p Revisión del último informe de inspección: se deben evidenciar los reportes de alguna falla evidenciada y su reparación o subsanación y revisar si estas corrigieron el origen del reporte.

        .bg--yellow2.p-3(x="8.5%" y="73%" numero="+")
          .h5.mb-2 Revisión del motor
          p Revisar niveles de algunos fluidos del motor, como el nivel del aceite del motor, refrigerante, hidráulico, líquido limpiaparabrisas, líquido de batería y sus conexiones, estado de mangueras, aislamientos eléctricos, goteras de algunos fluidos.

        .bg--yellow2.p-3(x="32.7%" y="38%" numero="+")
          .h5.mb-2 Revisión de la cabina
          p Los cinturones, elementos sueltos, revisión de indicadores de los tableros, conexiones eléctricas que puedan generar cortos, estado de cojinería, parabrisas y espejos que no tengan rotura, suciedad o autoadhesivos, revisar pedales que se accionen correctamente, elementos que estén sueltos, pegados, dañados, o mal instalados.

        .bg--yellow2.p-3(x="27%" y="89%" numero="+")
          .h5.mb-2 Revisión de luces
          p Revisión de luces delanteras (altas y bajas), estacionarias, de indicación de giro.

        .bg--yellow2.p-3(x="8%" y="60%" numero="+")
          .h5.mb-2 Revisión de los espejos y el parabrisas
          p Inspección de los espejos y el parabrisas para ver si hay alguna rotura, suciedad, autoadhesivos ilegales, o alguna otra cosa que obstruya la vista. Limpiar y ajustar como sea necesario.

        .bg--yellow2.p-3(x="52%" y="85%" numero="+")
          .h5.mb-2 Revisión del equipo de emergencia
          p De acuerdo con el Código Nacional de Tránsito Terrestre, Artículo 30. Equipos de prevención y seguridad.

        .bg--yellow2.p-3(x="59.8%" y="16%" numero="+")
          .h5.mb-2 Aseguramiento de la carga
          p Revisar que esté adecuadamente protegida en su embalaje, asegurada, carrocería o pines en correcta posición, las lonas de carpas en buen estado, si la carga es extradimensionada, que cumplan los avisos según la Resolución 4959.
        

    

   

</template>

<script>
export default {
  name: 'Tema7',
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
