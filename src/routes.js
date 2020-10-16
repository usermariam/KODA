import React from 'react';
import $ from 'jquery';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const nouveau_contrat = React.lazy(() => import('./Components/Employe&Contrats/Nouveau_contrat'));
const liste_contrat = React.lazy(() => import('./Components/Employe&Contrats/Liste_contrat'));

const liste_employes = React.lazy(() => import('./Components/Employe&Contrats/Liste_employes'));

const liste_presence = React.lazy(() => import('./Components/Assiduite&Paie/Liste_presence'));
const liste_demande_perm = React.lazy(() => import('./Components/Assiduite&Paie/Liste_demande_perm'));
const liste_demande_cong = React.lazy(() => import('./Components/Assiduite&Paie/Liste_demande_cong'));
const liste_fiche_paie = React.lazy(() => import('./Components/Assiduite&Paie/Liste_fiche_paie'));

const Demande_permission = React.lazy(() => import('./Components/EspaceEmploye/Demande_permission'));
const Demande_conges = React.lazy(() => import('./Components/EspaceEmploye/Demande_conges'));

const GestPays = React.lazy(() => import('./Components/Environnement&ParamGen/GestPays'));
const GestDepartement = React.lazy(() => import('./Components/Environnement&ParamGen/GestDepartement'));
const GestService = React.lazy(() => import('./Components/Environnement&ParamGen/GestService'));
const GestPoste = React.lazy(() => import('./Components/Environnement&ParamGen/GestPoste'));
const GestTypeContrat = React.lazy(() => import('./Components/Environnement&ParamGen/GestTypeContrat'));
const GestGroupeUtil = React.lazy(() => import('./Components/Environnement&ParamGen/GestGroupeUtil'));
const GestHabilitation = React.lazy(() => import('./Components/Environnement&ParamGen/GestHabilitation'));
const GestUtilisateur = React.lazy(() => import('./Components/Environnement&ParamGen/GestUtilisateur'));


const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },


    { path: '/contrat/nouveau', exact: true, name: 'Nouveau contrats', component: nouveau_contrat },
    { path: '/contrat/liste', exact: true, name: 'Liste des contrats', component: liste_contrat },

    { path: '/employes/liste', exact: true, name: 'Liste employés', component: liste_employes },

    { path: '/assuidite/presence', exact: true, name: 'Demande de permissions', component: liste_presence },
    { path: '/assuidite/demande/permission', exact: true, name: 'Demande de permissions', component: liste_demande_perm },
    { path: '/assuidite/demande/conges', exact: true, name: 'Demande de congés', component: liste_demande_cong },
    { path: '/paie/liste_fiche', exact: true, name: 'Liste des fiches de paie', component: liste_fiche_paie },

    { path: '/dem_permission', exact: true, name: 'Demande de permissions', component: Demande_permission },
    { path: '/dem_conges', exact: true, name: 'Demande de congés', component: Demande_conges },

    { path: '/parametre_generaux/pays', exact: true, name: 'Gestion des pays', component: GestPays },
    { path: '/parametre_generaux/departement', exact: true, name: 'Gestion des département', component: GestDepartement },
    { path: '/parametre_generaux/service', exact: true, name: 'Gestion des services', component: GestService },
    { path: '/parametre_generaux/poste', exact: true, name: 'Gestion des postes', component: GestPoste },
    { path: '/parametre_generaux/type_contrat', exact: true, name: 'Gestion des postes', component: GestTypeContrat },
    { path: '/parametre_generaux/groupe_utilisateur', exact: true, name: 'Gestion des groupes utilisateurs', component: GestGroupeUtil },
    { path: '/gest_utilisateur/utilisateurs', exact: true, name: 'Gestion des utilisateurs', component: GestUtilisateur },
    { path: '/gest_utilisateur/habilitation', exact: true, name: 'Gestion des habilitations', component: GestHabilitation },
];

export default routes;