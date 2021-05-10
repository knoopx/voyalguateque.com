import React from "react"
import { MdMenu, MdClose, MdChevronRight } from "react-icons/md"

import Drawer from "../components/Drawer"
import Header from "../components/Header"
import Map from "../components/Map"
import AnchorLink from "../components/AnchorLink"

const NavItem = (props) => (
  <AnchorLink className="hidden lg:block px-5 py-5 font-serif" {...props} />
)

const MenuItem = (props) => {
  return <AnchorLink className="px-8 py-4 text-center border-b" {...props} />
}

const Heading = (props) => (
  <h1 className="z-10 mb-10 font-serif font-bold text-3xl" {...props} />
)

const Accomodation = ({ title, distance, url, children }) => {
  return (
    <a href={url} rel="nofollow" className="flex flex-col p-4 lg:w-1/2">
      <h2 className="z-10 font-medium text-lg whitespace-nowrap">
        {title} <MdChevronRight className="inline-block" size="1.6em" />
      </h2>
      <h5 className="z-10 mb-8 text-gray-600">(a {distance})</h5>
      <div className="z-0">{children}</div>
    </a>
  )
}

const Divider = ({ flip = false }) => {
  return (
    <img
      className="block mx-auto my-16"
      src={
        flip
          ? require("../images/fulleta-esquerra.png").default
          : require("../images/fulleta-dreta.png").default
      }
    />
  )
}

const Page = ({ data }) => {
  const [isMenuVisible, setMenuVisible] = React.useState(false)
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  const MenuIcon = isMenuVisible ? MdClose : MdMenu

  return (
    <div className="overflow-y-hidden text-gray-800">
      <Drawer isOpen={isMenuVisible} className="flex flex-col pt-24 bg-white">
        <MenuItem onClick={toggleMenu} href="#location">
          Localización
        </MenuItem>
        <MenuItem onClick={toggleMenu} href="#transport">
          Transporte
        </MenuItem>
        <MenuItem onClick={toggleMenu} href="#accomodation">
          Alojamientos
        </MenuItem>
        <MenuItem onClick={toggleMenu} href="#gifts">
          Regalo de boda
        </MenuItem>
        <div className="p-8">
          <img src={require("../images/corona2.png").default} />
        </div>
      </Drawer>
      <Header>
        <div className="flex items-center">
          <a
            onClick={toggleMenu}
            className="lg:hidden z-10 mr-auto cursor-pointer"
          >
            <MenuIcon size="2em" />
          </a>
          <div className="flex flex-auto items-center justify-center -ml-8 md:ml-0">
            <NavItem href="#location">Localización</NavItem>
            <NavItem href="#transport">Transporte</NavItem>
            <AnchorLink href="#main" className="mt-1 mx-5 py-2">
              <img
                className="h-10"
                src={require("../images/logo.png").default}
              />
            </AnchorLink>
            <NavItem href="#accomodation">Alojamientos</NavItem>
            <NavItem href="#gifts">Regalo de boda</NavItem>
          </div>
        </div>
      </Header>

      <div id="main" className="container pt-24">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="mb-8">
            <img src={require("../images/corona.png").default} />
          </div>
          <div className="md:w-7/12 leading-relaxed">
            <p>
              Será una celebración formal, pero no te esperes la gala de los
              Oscar. Ven preparado para bailar (pero no pegao’, porque nos
              multan), beber, parlotear mucho, conocer a nuestros amigos y
              familia (si no los conoces ya) y, sobre todo, papear como si no
              hubiera mañana (en El Folló se come como los dioses). También
              traete una chaqueta para cuando baje el sol; ten presente que
              estaremos en la montaña, así que puede refrescar.
            </p>
            <p>
              Para poder organizar este guatequito pandémico como se debe, te
              pedimos que{" "}
              <span className="font-medium">
                confirmes tu asistencia antes del 15 de mayo.
              </span>
            </p>
          </div>
          <Divider flip />
        </div>

        <div id="location" className="min-h-screen">
          <Heading>Localización</Heading>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
              <dl className="mb-10">
                <dt>Lugar:</dt>
                <dd>El Folló</dd>
                <dt>Dirección:</dt>
                <dd>Masía El Folló 08593 Tagamanent, Barcelona</dd>
                <dt>Fecha:</dt>
                <dd>Viernes 04 de junio de 2021</dd>
                <dt>Hora:</dt>
                <dd>18h</dd>
              </dl>
            </div>
            <div className="-mt-16 mb-8 lg:-mt-32 md:-mr-24 md:w-1/2">
              <img src={require("../images/fotos localizacion.png").default} />
            </div>

            <div className="md:-mt-48 md:w-1/2">
              <Map className="relative md:mb-8" lat={41.7402} lng={2.2686123} />
              <img
                className="-mt-10 ml-auto md:-ml-16 md:-mt-16 w-2/3"
                src={require("../images/flor google maps.png").default}
              />
            </div>
          </div>
          <Divider />
        </div>

        <div id="transport" className="min-h-screen">
          <Heading>Transporte</Heading>
          <div className="flex flex-wrap">
            <div className="mb-8 md:pr-16">
              <p>
                En El Folló hay espacio para aparcar tu coche. Debido al COVID
                no ofreceremos el servicio de bus, por lo que te recomendamos
                venir en tu propio coche o unirte con algún familiar o amigo
                para venir juntos (no dudes en avisarnos si necesitas ayuda en
                este último punto).
              </p>
            </div>

            <div className="flex flex-auto flex-col md:flex-row">
              <div className="order-2 md:order-1 -mt-32 mx-auto md:-mr-4 md:mt-0 w-2/3 md:w-3/12">
                <img
                  className="rotate-90 md:rotate-0"
                  src={require("../images/flor transporte.png").default}
                />
              </div>
              <div className="order-1 md:order-2 md:w-1/2">
                <Map lat={41.7402} lng={2.2686123} />
              </div>
            </div>
          </div>
          <Divider flip />
        </div>

        <div id="accomodation" className="min-h-screen">
          <Heading>Alojamientos</Heading>
          <div>
            <p className="mb-12 lg:w-2/3">
              El Folló se encuentra en un precioso espacio natural,
              concretamente en el Parque del Montseny. Si la mañana siguiente
              quieres despertarte en este maravilloso entorno, te recomendamos
              los siguientes alojamientos:
            </p>

            <div className="flex flex-wrap -m-4">
              <Accomodation
                title="Les Casetes del Congost en Tagamanent"
                distance="2,4km"
                url="http://www.lescasetesdelcongost.cat"
              >
                <p className="-mt-6 mb-2 text-sm">
                  En el mismo pueblo donde se celebra la boda
                </p>
                <img
                  className="lg:-ml-16 pointer-events-none"
                  src={require("../images/casetes del congost.png").default}
                />
              </Accomodation>

              <Accomodation
                title="Hostal l'Esquella en Aiguafreda"
                distance="6km"
                url="https://www.booking.com/hotel/es/hostal-l-39-esquella.es.html"
              >
                <img
                  className="-mt-10 pointer-events-none"
                  src={require("../images/hostal l'esquella.png").default}
                />
              </Accomodation>

              <Accomodation
                title="Sono Apartamentos en La Garriga"
                distance="8,2km"
                url="https://www.sonoapartamentos.com"
              >
                <img
                  className="pointer-events-none"
                  src={require("../images/sono-apartamentos.png").default}
                />
              </Accomodation>

              <Accomodation
                title="Montanyà Hotel & Lodge en Seva"
                distance="12km"
                url="https://www.montanyahotel.com"
              >
                <img
                  className="-mt-20 pointer-events-none"
                  src={require("../images/montanya-hotel.png").default}
                />
              </Accomodation>
            </div>
          </div>
          <Divider />
        </div>

        <div id="gifts" className="min-h-screen">
          <Heading>Regalo de boda</Heading>

          <div className="flex flex-wrap lg:flex-no-wrap">
            <div className="lg:w-2/4">
              <p>
                Flavia y Juancho tienen la mayor parte de sus necesidades
                satisfechas, por lo cual no necesitan ningún tipo de bienes
                materiales. Además, están completamente aterrados ante la
                perspectiva del calentamiento global, por lo cual piden que no
                se les obsequie ningún tipo de artefacto, electrodoméstico y
                demás objetos que suelen regalarse para estas ocasiones. Sin
                embargo, disfrutan mucho viajando. Si quieres regalarles algo
                (lo cual no es necesario, pues tu presencia ya les sirve como
                regalo), puedes ayudarles con su viaje de novios:
              </p>
              <p className="font-medium">
                <span className="numeric">ES12 3025 0001 1514 3360 1353</span>
                <br />
                Caixa d’Enginyers
              </p>
            </div>
            <img
              className="lg:-mt-32 lg:w-2/4"
              src={require("../images/flors-regalo-de-boda.png").default}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
