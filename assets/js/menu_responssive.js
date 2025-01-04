jQuery(document).ready(function($) {
    // Sélectionne tous les éléments de menu avec des sous-menus
    $('.menu-item-has-children > a').on('click', function(event) {
        // Empêche le comportement par défaut du lien
        event.preventDefault();
        
        // Trouve le sous-menu correspondant à ce lien
        let submenu = $(this).siblings('.sub-menu');
        
        // Basculer la visibilité du sous-menu
        submenu.toggleClass('open_menu');
        
        // Optionnel : ferme les autres sous-menus ouverts
        $('.sub-menu').not(submenu).removeClass('open_menu');
    });
});