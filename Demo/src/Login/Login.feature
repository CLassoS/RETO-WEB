@Login
Feature: Inicio de Sesión en la pagina 
  Scenario: Inicio de Sesión Exitoso
    Given que estoy en la página de inicio de sesión
    When ingreso mi nombre de usuario y contraseña
    Then debería ser redirigido a la página principal