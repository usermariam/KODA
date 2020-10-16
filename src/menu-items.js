export default {
    items: [
        {
            id: 'Emp&Cont',
            title: 'Employés & Contrats',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'GestCont',
                    title: 'Gestion des contrats',
                    type: 'collapse',
                    url: '/',
                    icon: 'feather icon-edit',
                    children: [
                        {
                            id: 'NvCont',
                            title: 'Nouveau contrat',
                            type: 'item',
                            url: '/contrat/nouveau'
                        },
                        {
                            id: 'listCont',
                            title: 'Liste des contrats',
                            type: 'item',
                            url: '/contrat/liste'
                        }
                    ]
                },
                {
                    id: 'GestEmp',
                    title: 'Gestion des employés',
                    type: 'collapse',
                    url: '/',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'listEmp',
                            title: 'Liste des employées',
                            type: 'item',
                            url: '/employes/liste'
                        }
                    ]
                }
            ]
        },
        {
            id: 'Ass&Paie',
            title: 'Assiduité & Paie',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'GestAss',
                    title: 'Gestion des assiduités',
                    type: 'collapse',
                    icon: 'feather icon-clock',
                    children: [
                        {
                            id: 'ListPre',
                            title: 'Liste de présence',
                            type: 'item',
                            url: '/assuidite/presence'
                        },
                        {
                            id: 'AppDem',
                            title: 'Appréciation demande',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'DemPerm',
                                    title: 'Demande de permission',
                                    type: 'item',
                                    url: '/assuidite/demande/permission'
                                },
                                {
                                    id: 'DemCong',
                                    title: 'Demande de congés',
                                    type: 'item',
                                    url: '/assuidite/demande/conges'
                                },
                            ]
                        }
                    ]
                },
                {
                    id: 'GestPaie',
                    title: 'Gestion de la paie',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    children: [
                        {
                            id: 'ListPaie',
                            title: 'Liste des fiches de paie',
                            type: 'item',
                            url: '/paie/liste_fiche'
                        }
                    ]
                }
            ]
        },
        {
            id: 'EspEmploye',
            title: 'Espace employé',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'DemPerm',
                    title: 'Demande de permission',
                    type: 'item',
                    icon: 'feather icon-file',
                    url: '/dem_permission'
                },
                {
                    id: 'DemConge',
                    title: 'Demande de congés',
                    type: 'item',
                    icon: 'feather icon-briefcase',
                    url: '/dem_conges'
                }
            ]
        },
        {
            id: 'Env&PG',
            title: 'Environnement & Paramètres Généraux',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'ParamGen',
                    title: 'Gestion Paramètres Gen.',
                    type: 'collapse',
                    icon: 'feather icon-settings',
                    children: [
                        {
                            id: 'Pays',
                            title: 'Gestion des Pays',
                            type: 'item',
                            url: '/parametre_generaux/pays'
                        },
                        {
                            id: 'Depart',
                            title: 'Gestion des départements',
                            type: 'item',
                            url: '/parametre_generaux/departement'
                        },
                        {
                            id: 'Service',
                            title: 'Gestion des services',
                            type: 'item',
                            url: '/parametre_generaux/service'
                        },
                        {
                            id: 'Poste',
                            title: 'Gestion des postes',
                            type: 'item',
                            url: '/parametre_generaux/poste'
                        },
                        {
                            id: 'typeCont',
                            title: 'Gestion des types de contrat',
                            type: 'item',
                            url: '/parametre_generaux/type_contrat'
                        },
                        {
                            id: 'GroupUtil',
                            title: 'Gestion des groupes utilisateurs',
                            type: 'item',
                            url: '/parametre_generaux/groupe_utilisateur'
                        }
                    ]
                },
                {
                    id: 'utilisateurs',
                    title: 'Gestion des utilisateurs',
                    type: 'collapse',
                    icon: 'feather icon-user-check',
                    children: [
                        {
                            id: 'gestUtil',
                            title: 'Gestion des utilisateurs',
                            type: 'item',
                            url: '/gest_utilisateur/utilisateurs'
                        },
                        {
                            id: 'gestAcces',
                            title: 'Gestion des habilitations',
                            type: 'item',
                            url: '/gest_utilisateur/habilitation'
                        }
                    ]
                }
            ]
        },
        /*{
            id: 'chart-maps',
            title: 'Chart & Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Charts',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                },
                {
                    id: 'maps',
                    title: 'Map',
                    type: 'item',
                    icon: 'feather icon-map',
                    url: '/maps/google-map'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'docs',
                    title: 'Documentation',
                    type: 'item',
                    url: '/docs',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!',
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#',
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#',
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                },
                /!*{
                    id: 'buy-now',
                    title: 'Buy Now',
                    type: 'item',
                    icon: 'feather icon-user',
                    classes: 'nav-item',
                    url: 'https://codedthemes.com',
                    target: true,
                    external: true,
                    badge: {
                        title: 'v1.0',
                        type: 'label-primary'
                    }
                }*!/
            ]
        }*/
    ]
}