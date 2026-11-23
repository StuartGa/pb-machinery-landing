import type { SiteContent } from '@/types'

/**
 * PB Machinery landing content — source of truth for copy and assets.
 * Aligned to PB_Machinery_Landing_Page_Aprobacion_v2.pdf
 */
export const siteContent: SiteContent = {
  brand: {
    name: 'PB Machinery',
    fullName: 'Pastry & Bakery Machinery',
    logoHeader: '/images/logo.svg',
    logoFooter: '/images/logo-white.svg',
  },

  navigation: [
    {
      label: 'Soluciones',
      href: '#industrias',
      children: [
        { label: 'Pastelería & Galletería', href: '#pasteleria' },
        { label: 'Panadería Artesanal & Bizcochería', href: '#panaderia' },
      ],
    },
    { label: 'Pastelería & Galletería', href: '#pasteleria' },
    { label: 'Panadería Artesanal & Bizcochería', href: '#panaderia' },
    { label: '¿Por qué PB Machinery?', href: '#por-que-pb' },
  ],

  headerCta: { label: 'Solicita tu cotización', href: '#contacto' },

  hero: {
    eyebrow: 'Maquinaria especializada para la industria de alimentos',
    title: 'Lleva tu producción al siguiente nivel.',
    description:
      'Soluciones de maquinaria para pastelerías, galleterías y panaderías artesanales que buscan mayor capacidad, consistencia y control en sus procesos.',
    background: '/images/hero-bg.webp',
    productImage: '/images/hero-cake.webp',
    productImageAlt: 'Pastel de fresa con crema — producción de pastelería',
    trust: [
      {
        id: 'years',
        label: 'Más de 40 años de presencia en América y Europa',
        icon: 'calendar',
      },
      {
        id: 'design',
        label: 'Diseño de soluciones para procesos semiautomáticos',
        icon: 'gear',
      },
      {
        id: 'usa',
        label: 'Fabricación en Estados Unidos',
        icon: 'flag',
      },
    ],
    form: {
      title: 'Solicita tu cotización',
      subtitle: 'Cuéntanos sobre tu operación y el equipo que estás buscando.',
      submitLabel: 'Solicita tu cotización',
      footnote:
        'Un especialista revisará la información de tu operación para dar seguimiento a tu solicitud.',
      fields: [
        { id: 'name', label: 'Nombre completo', name: 'name', type: 'text', required: true },
        { id: 'company', label: 'Empresa', name: 'company', type: 'text', required: true },
        {
          id: 'role',
          label: 'Cargo',
          name: 'role',
          type: 'select',
          required: true,
          options: ['Propietario', 'Gerente de producción', 'Chef / Maestro panadero', 'Compras', 'Otro'],
        },
        {
          id: 'email',
          label: 'Correo corporativo',
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          id: 'phone',
          label: 'Teléfono / WhatsApp',
          name: 'phone',
          type: 'tel',
          required: true,
          colSpan: 2,
        },
        {
          id: 'industry',
          label: 'Industria',
          name: 'industry',
          type: 'select',
          required: true,
          options: [
            'Pastelería & Galletería',
            'Panadería Artesanal & Bizcochería',
            'Ambas',
            'Otra',
          ],
        },
        {
          id: 'need',
          label: 'Necesidad',
          name: 'need',
          type: 'select',
          required: true,
          options: [
            'Aumentar capacidad',
            'Mejorar consistencia',
            'Automatizar un proceso',
            'Reemplazar equipo',
            'Proyecto nuevo',
          ],
        },
        {
          id: 'machine',
          label: 'Máquina de interés',
          name: 'machine',
          type: 'select',
          required: true,
          colSpan: 2,
          options: [
            'Robotina PN-300',
            'Cream Levain',
            'Dough Block / Silex',
            'Dosificación y depósito',
            'Galletería',
            'Tarteletas y pays',
            'Transferencia de preparaciones',
            'Aún no lo sé / Necesito asesoría',
          ],
        },
      ],
    },
  },

  industries: {
    title: '¿A qué industria pertenece tu operación?',
    description:
      'Contamos con soluciones específicas para los principales procesos de pastelería, galletería, panadería artesanal y bizcochería.',
    items: [
      {
        id: 'pastry',
        title: 'Pastelería & Galletería',
        description: 'Mayor control sobre dosificación, humectación, depósito y producción.',
        image: '/images/industry-pastry.webp',
        imageAlt: 'Pastelería con crema y frutos rojos',
        href: '#pasteleria',
        icon: 'cupcake',
      },
      {
        id: 'bakery',
        title: 'Panadería Artesanal & Bizcochería',
        description:
          'Más capacidad para trabajar masas de alta hidratación y procesos de pan artesanal.',
        image: '/images/industry-bread.webp',
        imageAlt: 'Pan artesanal recién horneado',
        href: '#panaderia',
        icon: 'bread',
      },
    ],
  },

  evolve: {
    eyebrow: 'Cuando la producción crece',
    title: 'Tu proceso también tiene que evolucionar.',
    paragraphs: [
      'Aumentar la producción no debería significar depender cada vez más del trabajo manual ni comprometer la consistencia de tus productos.',
      'PB Machinery desarrolla soluciones especializadas para ayudarte a convertir esos retos en una operación más eficiente, controlada y preparada para crecer.',
    ],
    image: '/images/evolve-dough.webp',
    imageAlt: 'Masa en proceso de producción panadera',
    benefits: [
      {
        id: 'capacity',
        title: 'Mayor capacidad',
        description: 'sin aumentar la carga operativa.',
        icon: 'capacity',
      },
      {
        id: 'consistency',
        title: 'Mayor consistencia',
        description: 'Procesos más controlados y repetibles.',
        icon: 'consistency',
      },
      {
        id: 'control',
        title: 'Mayor control',
        description: 'Estandariza y optimiza etapas clave de tu producción.',
        icon: 'control',
      },
    ],
  },

  pastry: {
    title: 'Soluciones para Pastelería & Galletería',
    description:
      'Equipos especializados para humectación, dosificación, depósito y producción de pasteles, galletas, tarteletas y pays.',
    featured: {
      id: 'robotina',
      category: 'Humectación de pasteles',
      name: 'Robotina PN-300',
      description: 'Humectación rápida y precisa para una distribución homogénea del líquido.',
      image: '/images/robotina.webp',
      imageAlt: 'Robotina PN-300 — humectadora neumática PB Machinery',
      features: [
        { id: 'f1', text: 'Más de 500 puntos de inyección' },
        { id: 'f2', text: 'Diferentes configuraciones' },
        { id: 'f3', text: 'Operación neumática (sin electricidad)' },
        { id: 'f4', text: 'Diseño compacto y de fácil movilidad' },
      ],
      cta: { label: 'Cotiza la Robotina PN-300', href: '#contacto' },
    },
    moreTitle: 'Más soluciones de la línea',
    line: [
      {
        id: 'dosing',
        title: 'Dosificación y depósito',
        image: '/images/line-dosificacion.webp',
        imageAlt: 'Equipo de dosificación y depósito',
      },
      {
        id: 'cookies',
        title: 'Galletería',
        image: '/images/line-galleteria.webp',
        imageAlt: 'Línea de galletería',
      },
      {
        id: 'tarts',
        title: 'Tarteletas y pays',
        image: '/images/line-tarteletas.webp',
        imageAlt: 'Equipo para tarteletas y pays',
      },
      {
        id: 'transfer',
        title: 'Transferencia de preparaciones',
        image: '/images/line-transferencia.webp',
        imageAlt: 'Sistema de transferencia de preparaciones',
      },
    ],
  },

  bakery: {
    title: 'Soluciones para Panadería Artesanal & Bizcochería',
    description:
      'Tecnología para el desarrollo de pan artesanal, control de levadura y manejo de masas de alta hidratación.',
    products: [
      {
        id: 'cream-levain',
        category: 'Levadura líquida natural',
        name: 'Cream Levain',
        description: 'Controla el proceso de maduración y desarrolla el aroma y sabor de tu pan.',
        image: '/images/cream-levain.webp',
        imageAlt: 'Cream Levain — fermentador de masa madre líquida',
        features: [
          { id: 'c1', text: 'Control de pH, temperatura, presión y tiempo' },
          { id: 'c2', text: 'Mayor regularidad del proceso' },
          { id: 'c3', text: 'Diseño sanitario en acero inoxidable' },
          { id: 'c4', text: 'Diferentes capacidades de operación' },
        ],
        cta: { label: 'Cotiza Cream Levain', href: '#contacto' },
      },
      {
        id: 'silex',
        category: 'División de masas de alta hidratación',
        name: 'Dough Block / Silex',
        description: 'Divide y forma masas de alta hidratación sin comprometer su estructura.',
        image: '/images/silex.webp',
        imageAlt: 'Dough Block / Silex — divisora volumétrica',
        features: [
          { id: 's1', text: 'Para masas con 68–80% de agua' },
          { id: 's2', text: 'Preserva la estructura de la masa' },
          { id: 's3', text: 'Proceso repetible y consistente' },
          { id: 's4', text: 'Silex 1: hasta 1,600 piezas/h' },
          { id: 's5', text: 'Silex 2: hasta 2,000 piezas/h' },
        ],
        cta: { label: 'Cotiza Dough Block / Silex', href: '#contacto' },
        variants: [
          {
            id: 'silex-1',
            name: 'SILEX 1',
            capacity: 'Hasta 1,600 piezas/h',
            image: '/images/silex.webp',
          },
          {
            id: 'silex-2',
            name: 'SILEX 2',
            capacity: 'Hasta 2,000 piezas/h',
            image: '/images/silex-2.webp',
          },
        ],
      },
    ],
  },

  process: {
    title: 'Así funciona',
    subtitle: 'De tu necesidad a la solución adecuada.',
    steps: [
      {
        id: 'step-1',
        step: 1,
        title: 'Cuéntanos qué produces',
        description: 'Comparte tu industria, producto y proceso actual.',
        icon: 'clipboard',
      },
      {
        id: 'step-2',
        step: 2,
        title: 'Analizamos tu necesidad',
        description: 'Identificamos qué quieres mejorar y tu capacidad.',
        icon: 'search',
      },
      {
        id: 'step-3',
        step: 3,
        title: 'Te recomendamos la solución',
        description: 'El equipo ideal para tu operación.',
        icon: 'gear',
      },
      {
        id: 'step-4',
        step: 4,
        title: 'Recibe tu cotización',
        description: 'Obtén información técnica y una propuesta comercial.',
        icon: 'document',
      },
    ],
  },

  cta: {
    title: '¿Listo para hacer más eficiente tu producción?',
    description: 'Cuéntanos qué necesitas y recibe una cotización de acuerdo con tu operación.',
    button: { label: 'Solicita tu cotización', href: '#contacto' },
    background: '/images/cta-bread.webp',
  },

  footer: {
    linkGroups: [
      {
        title: 'Soluciones',
        links: [
          { label: 'Pastelería & Galletería', href: '#pasteleria' },
          { label: 'Panadería Artesanal & Bizcochería', href: '#panaderia' },
          { label: '¿Por qué PB Machinery?', href: '#por-que-pb' },
        ],
      },
    ],
    contact: {
      email: 'eduardo@pbmachineryusa.com',
      website: 'www.pbmachineryusa.com',
      address: 'Kingwood, TX 77345, USA',
    },
    madeInUsa: 'Fabricación en Estados Unidos',
    copyright: '© 2026 Pastry & Bakery Machinery. Todos los derechos reservados.',
  },
}
