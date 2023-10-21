import {
    FaEnvelope,
    FaGithub,
    FaHouse,
    FaLinkedinIn,
    FaRenren,
    FaUser,
    FaYoutube,
} from "react-icons/fa6";
import {HiOutlineMail} from "react-icons/hi"

import { AnaliticsIcon, NLPIcon, MLIcon, AnaliticsImage, MLImage, NLPImage } from "../assets";

export const Socials = [
    {
        id: `email-${Date.now()}`,
        Icon: HiOutlineMail,
        uril: "mailto:luisenriquelozanomejia@gmail.com",
        color: "#1877F2",
    },
    {
        id: `linkedin-${Date.now()}`,
        Icon: FaLinkedinIn,
        uril: "",
        color: "#0072b1",
    },
    {
        id: `github-${Date.now()}`,
        Icon: FaGithub,
        uril: "",
        color: "#fff",
    },
    {
        id: `youtube-${Date.now()}`,
        Icon: FaYoutube,
        uril: "",
        color: "#ff0000",
    },
];

export const Menus = [
    {
        id: `home-${Date.now()}`,
        Icon: FaHouse,
        uri: "#home",
        name: "Home",
    },
    {
        id: `about-${Date.now()}`,
        Icon: FaUser,
        uri: "#about",
        name: "About",
    },
    {
        id: `skills-${Date.now()}`,
        Icon: FaRenren,
        uri: "#services",
        name: "Services",
    },
    // {
    //     id: `projects-${Date.now()}`,
    //     Icon: FaDiagramProject,
    //     uri: "#projects",
    //     name: "Projects",
    // },
    {
        id: `contact-${Date.now()}`,
        Icon: FaEnvelope,
        uri: "#contact",
        name: "Contact",
    },
];

export const MenuServices = [
    
    {
        title: "Análisis y Visualización de Datos",
        content: [
            {service:"Análisis de Datos:", text: "Uso de herramientas avanzadas para extraer conocimientos ocultos en tus datos, permitiéndote tomar decisiones informadas y estratégicas."}, 
            {service:"Limpieza de Datos:", text: "Eliminación de ruido y errores de tus conjuntos de datos, garantizando que estén listos para un análisis preciso y efectivo."}, 
            {service:"Visualización de Datos:", text: "Transformación de datos en información valiosa para la toma de decisiones, identificar patrones y tendencias ocultas."}, 
            {service:"Informes Persuasivos:", text: "Informes detallados que comunican de manera efectiva los hallazgos y las recomendaciones clave."}, 
        ],
        icon: AnaliticsIcon,
        image: AnaliticsImage
    },
    {
        title: "Machine Learning y Algoritmos",
        content: [
            {service:"Algoritmos de Machine Learning Personalizados:", text: "Entrenamiento de modelos de ML adaptados a tus necesidades para la toma de decisiones predictivas."}, 
            {service:"Aplicaciones de IA Inteligentes:", text: "Desarrollo de aplicaciones de inteligencia artificial que automatizan tareas y mejoran la eficiencia."}, 
            {service:"Backend en Data Science:", text: "Sistemas escalables y robustos para gestionar y analizar grandes volúmenes de datos."}, 
            {service:"Optimización de Modelos de ML:", text: "Mejora el rendimiento de tus modelos existentes para obtener resultados más precisos."}, 
        ],
        icon: MLIcon,
        image: MLImage
    },
    {
        title: "Web Scraping y Procesamiento de Lenguaje Natural (NLP)",
        content: [
            {service:"Web Scraping de Datos Relevantes:", text: "Extrae información valiosa de la web para enriquecer tus análisis."}, 
            {service:"Clasificación y Etiquetado de Texto:", text: "Organiza y etiqueta grandes conjuntos de texto para identificar patrones y tendencias."}, 
            {service:"Análisis de Sentimiento:", text: "Descubre lo que las opiniones en línea dicen sobre tu marca y productos para tomar medidas proactivas."}, 
            {service:"Modelos de Chatbot Avanzados:", text: "Diseño de Chatbots inteligentes que elevan la experiencia del usuario a un nivel personalizado."}, 
        ],
        icon: NLPIcon,
        image: NLPImage
    },
    
];
