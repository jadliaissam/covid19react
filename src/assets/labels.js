
export function getStrings(lang){
    if(lang)
        return ar_strings
    else
        return fr_strings
}

export const ar_strings = {
    'title': "المعطيات الراهنة حول  فيروس كورونا في المغرب",
    'select_state': "الجهة",
    'all_states': "كل الجهات",
    'select_prefecture': "العمالة | الاقليم",
    'all_prefectures': "كل العمالات | كل الاقاليم",
    'select_town': "المدينة",
    'all_towns': "كل المدن",
    'all_districts': "كل الأحياء",
    'select_district': "الحي | المنطقة",
    'label_map': "التوزيع الجغرافي للحالات",
    'label_filter': "اختيار المنطقة",
    'label_table': "معطيات تفصيلية",
    'recovered_count': "المتعافون",
    'dead_count': "الوفيات",
    'excluded_count': "الحالات المستبعدة",
    'confirmed_count': "الحالات المؤكدة",
    'pred_confirmed_count': "توقعات الحالات المؤكدة",
    'pred_recovered_count': "توقعات المتعافون",
    'pred_dead_count': "توقعات الوفيات",
    'pred_excluded_count': "توقعات الحالات المستبعدة",
    "label_graph": " مبيان توزيع الحالات  ",
    "label_no_data" : "المعلومات غير متوفرة",
    "label_evolution" : "منحنى تطور الحالة الوبائية",
    "title_prediction" : "التوقعات بخصوص الايام المقبلة",
    "graph_prediction" : "منحنى توقعات الأيام الثلاثة المقبلة",
    "label_prediction" : "توقعات الأيام الثلاثة المقبلة",
    "label_method_prediction" : "الخوارزمية",
    "label_duration_prediction" : "الإطار الزمني",
    "label_start_prediction" : "من",
    "label_end_prediction" : "الى",
    "value_method_prediction" : "ARRIMA",
    "label_soft_prediction" : "الادوات المستعملة",
    "value_soft_prediction" : "StatModels, البايثون 3",
    "label_credits_prediction" : "دراسة و انجاز",
    "value_credits_prediction" : "المدرسة العليا للفنون و المهن الدار البيضاء",
}

const fr_strings = {
    'title': "Etat Actuel de la Pandémie à Coronavirus (Covid-19) au Maroc",
    'select_state': "Région",
    'all_states': "Toutes les Régions",
    'select_prefecture': "Prefecture | Province",
    'all_prefectures': "Toutes les Prefectures | Provinces",
    'select_town': "Ville",
    'all_towns': "Toutes les Villes",
    'all_districts': "Tous les Quartiers",
    'select_district': "Quartier | Zone",
    'label_map': "Distribution Géographique des Cas déclarés",
    'label_filter': "Zone",
    'label_table': "Détails des Cas",
    'recovered_count': "Guéris",
    'dead_count': "Décès",
    'excluded_count': "Cas Négatifs",
    'confirmed_count': "Cas Positifs",
    'pred_confirmed_count': "Prédictions de Cas confirmés",
    'pred_recovered_count': "Prédictions de Cas Guéris",
    'pred_dead_count': "Prédictions de Décès",
    'pred_excluded_count': "Prédictions de Cas Négatifs",
    "label_graph": "Distribution des Cas par Zone",
    "label_no_data" : "Données Non Disponibles",
    "label_evolution" : "Courbes d'évolution de la pandémie Covid-19 ",
    "graph_prediction" : "Graphique des Prédictions des cas Covid-19 au Maroc ",
    "label_prediction" : "Prédictions pour les 3 jours à venir",
    "title_prediction" : "Prédictions pour les jours à venir",
    "label_duration_prediction" : "Période de Prédiction",
    "label_start_prediction" : "Du",
    "label_end_prediction" : "Au",
    "label_method_prediction" : "Algorithme",
    "value_method_prediction" : "ARRIMA",
    "label_soft_prediction" : "Librairie utilisé",
    "value_soft_prediction" : "StatModels, Python 3",
    "label_credits_prediction" : "Etude et Réalisation",
    "value_credits_prediction" : "ENSAM Casablanca",
}


export const colors = {
    "warning": "rgba(254, 176, 25, 0.85)",
    "primary": "rgba(0, 143, 251, 0.85)",
    "success": "rgba(0, 227, 150, 0.85)",
    "danger": "rgba(255, 69, 96, 0.85)",
    "info": "info"
}