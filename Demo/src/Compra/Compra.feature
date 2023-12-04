Feature: Inicio de Sesión, agrego y compro productos en la pagina Alkosto
  Background: login process
    Given que estoy en la página de inicio de sesión
    When ingreso mi nombre de usuario y contraseña
    Then debería ser redirigido a la página principal
    Given que estoy en la página de inicio
    When ingreso a refrigeracion en la categoria electrodomesticos
    Then deberia ser redirigido a la seccion del carrito
  @Compra
  Scenario: selecciona la cantidad de productos a comprar
    Given que estoy en la seccion de Carrito
    When agrego la cantidad de productos
    Then deberia ser redirigido a la seccion de pago