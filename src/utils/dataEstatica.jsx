/* eslint-disable no-unused-vars */
import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion />,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: "mdi-light:home",
    to: "/",
  },
  {
    label: "VENDER",
    icon: "material-symbols-light:shopping-cart-outline",
    to: "/pos",
  },
  {
    label: "Kardex",
    icon: "material-symbols-light:box-outline-sharp",
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: "material-symbols-light:add-chart-outline-sharp",
    to: "/reportes",
  },

];
export const SecondarylinksArray = [

  {
    label: "Configuración",
    icon: "material-symbols-light:settings-outline-rounded",
    to: "/settings",
  },



];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",

  },
  {
    icono: "🌚",
    descripcion: "dark",

  },
];

//data configuracion
export const DataModulosConfiguracion = [
  {
    title: "Productos",
    subtitle: "registra tus productos",
    icono: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link: "/settings/products",

  },
  {
    title: "Personal",
    subtitle: "ten el control de tu personal",
    icono: "https://i.ibb.co/5vgZ0fX/hombre.png",
    link: "/settings/users",

  },

  {
    title: "Tu empresa",
    subtitle: "configura tus opciones básicas",
    icono: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link: "/settings/empresa",

  },
  {
    title: "Categoria de productos",
    subtitle: "asigna categorias a tus productos",
    icono: "https://i.ibb.co/VYbMRLZ/categoria.png",
    link: "/settings/categories",

  },
  {
    title: "Marca de productos",
    subtitle: "gestiona tus marcas",
    icono: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link: "/settings/brand",

  },

]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];