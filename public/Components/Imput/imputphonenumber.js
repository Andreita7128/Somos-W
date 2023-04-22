// JavaScript con jQuery
$(document).ready(function() {
    // Obtener el valor del selector de países y actualizar la imagen de la bandera
    $('#countrySelect').on('change', function() {
      var selectedCountry = $(this).val();
      var selectedImage = $('option:selected', this).data('image');
      $('#flag-icon').attr('src', selectedImage);
    });

    $('#countrySelectError').on('change', function() {
      var selectedCountry = $(this).val();
      var selectedImage = $('option:selected', this).data('image');
      $('#flag-iconError').attr('src', selectedImage);
    });

    $('#countrySelectExito').on('change', function() {
      var selectedCountry = $(this).val();
      var selectedImage = $('option:selected', this).data('image');
      $('#flag-iconExito').attr('src', selectedImage);
    });
  });